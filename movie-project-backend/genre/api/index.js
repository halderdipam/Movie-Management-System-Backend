const { getAllGenres, getGenreAllMovies } = require('./get');
const { createGenres } = require('./post');
const { updateGenres } = require('./put');
const { deleteGenres } = require('./delete');



module.exports = { getAllGenres, createGenres, updateGenres, deleteGenres, getGenreAllMovies };
