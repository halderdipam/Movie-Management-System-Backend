const { MovieGenre } = require("../model/index");

class MovieGenreService {
    static async createMovieGenres(movieGenres) {
        return await MovieGenre.bulkCreate(movieGenres);
    }
}
module.exports = MovieGenreService;
