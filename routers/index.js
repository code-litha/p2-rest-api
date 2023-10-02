const express = require("express");
const router = express.Router();
const Controller = require("../controllers");

router.get("/movies", Controller.readMovies);
router.post("/movies", Controller.createMovie);
router.delete("/movies/:id", Controller.deleteMovie);

module.exports = router;
