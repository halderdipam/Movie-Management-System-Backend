const { MovieRole } = require("../model/index");

class MovieRolesService {
    static async createMovieRoles(movieRoles) {
        return await MovieRole.create(
            { name: movieRoles }
        );
    }
}
module.exports = MovieRolesService;
