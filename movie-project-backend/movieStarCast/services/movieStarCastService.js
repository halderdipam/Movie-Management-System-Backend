const { MovieStarCast } = require("../model/index");

class MovieStarCastService {
    static async createMovieStarCasts(movieStarCasts) {
        return await MovieStarCast.bulkCreate(movieStarCasts);
    }
}
module.exports = MovieStarCastService;

