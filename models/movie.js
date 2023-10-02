"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Name can't be null`,
          },
          notEmpty: {
            msg: `Name can't be empty`,
          },
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `imageUrl can't be null`,
          },
          notEmpty: {
            msg: `imageUrl can't be empty`,
          },
        },
      },
      releaseYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: `releaseYear can't be null`,
          },
          notEmpty: {
            msg: `releaseYear can't be empty`,
          },
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Rating can't be null`,
          },
          notEmpty: {
            msg: `Rating can't be empty`,
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
