const verifyUserToken = require("../middlewares/userAuth");
const auth = require("../middlewares/auth");
const { Router } = require('express');
const movieRouter = Router()
const { createMovies, deleteMovies, updateMovies, getAllMovies, getSpecificMovie } = require("./api/index");

movieRouter.get("/allmovies",getAllMovies);
movieRouter.get("/specificmovies/:id",getSpecificMovie);
movieRouter.post("/create", verifyUserToken, createMovies);
movieRouter.delete("/delete/:id", verifyUserToken, deleteMovies);
movieRouter.put("/update/:id", verifyUserToken, updateMovies);


module.exports = { movieRouter };