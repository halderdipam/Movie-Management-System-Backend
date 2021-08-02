const verifyUserToken = require("../middlewares/userAuth");
const { Router } = require('express');
const genreRouter = Router()
const { getAllGenres, createGenres, updateGenres, deleteGenres, getGenreAllMovies } = require("./api/index");


genreRouter.get("/allgenres", getAllGenres);
genreRouter.get("/genremovies/:id", getGenreAllMovies);
genreRouter.post("/create", verifyUserToken, createGenres);
genreRouter.put("/update/:id", verifyUserToken, updateGenres);
genreRouter.delete("/delete/:id", verifyUserToken, deleteGenres);



module.exports = { genreRouter };