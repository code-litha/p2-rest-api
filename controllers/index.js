const { Movie } = require("../models");

class Controller {
  // static readMovies(req, res) {
  //   Movie.findAll()
  //     .then((data) => {
  //       // res.status(200).json({
  //       //   statusCode: 200,
  //       //   message: `Success retrieved data movies`,
  //       //   data,
  //       // });

  //       res.status(200).json(data);
  //     })
  //     .catch((err) => {
  //       res.status(500).json({ message: `Internal Server Error` });
  //     });
  // }

  static async readMovies(req, res) {
    try {
      const data = await Movie.findAll();

      res.status(200).json({
        statusCode: 200,
        message: `Success retrieved data movies`,
        data,
      });
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error` });
    }
  }

  // static createMovie(req, res) {
  //   console.log(req.body, "<<<");
  //   const { name, imageUrl, releaseYear, rating } = req.body;
  //   const payload = {
  //     name,
  //     imageUrl,
  //     releaseYear,
  //     rating,
  //   };

  //   Movie.create(payload)
  //     .then(() => {
  //       return Movie.findAll();
  //     })
  //     .then((data) => {
  //       res.status(201).json({
  //         statusCode: 201,
  //         message: `Success create data movie`,
  //         data,
  //       });
  //     })
  //     .catch((error) => {
  //       res.status(500).json({ message: `Internal Server Error` });
  //     });
  // }

  static async createMovie(req, res) {
    try {
      const { name, imageUrl, releaseYear, rating } = req.body;
      const payload = {
        name,
        imageUrl,
        releaseYear,
        rating,
      };

      const newData = await Movie.create(payload);
      const movies = await Movie.findAll();

      res.status(201).json({
        statusCode: 201,
        message: `Success create data movie`,
        newData,
        data: movies,
      });
    } catch (error) {
      // console.log(error, "<<< error ");
      // const errors = ['Name can...', 'imageUrl...']
      if (error.name === "SequelizeValidationError") {
        //// Jika ingin dapat semua error
        // const errors = error.errors.map((err) => err.message);
        // res.status(400).json({ errorMessages: errors });

        //// Jika hanya ingin satu error
        const errorMsg = error.errors[0].message;
        res.status(400).json({ message: errorMsg });
      } else {
        res.status(500).json({ message: `Internal Server Error` });
      }
    }
  }

  static async deleteMovie(req, res) {
    try {
      const id = req.params.id;
      const data = await Movie.findByPk(id);

      if (!data) {
        res.status(404).json({ message: `Movie Not Found` });
      } else {
        await Movie.destroy({
          where: {
            id,
          },
        });
        res.status(200).json({ message: `Success delete data` });
      }
    } catch (error) {
      res.status(500).json({ message: `Internal Server Error` });
    }
  }
}

module.exports = Controller;
