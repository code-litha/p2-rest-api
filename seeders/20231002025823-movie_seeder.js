"use strict";

// const fs = require('fs')
// const data = JSON.parse(fs.readFileSync('./data/movies.json'))

const data = require("../data/movies.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    data.forEach((movie) => {
      movie.createdAt = new Date();
      movie.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Movies", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("Movies", null, {});
  },
};
