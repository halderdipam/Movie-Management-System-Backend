const { Movie } = require("../model/index");

class MovieService {
    static async validMovie(name) {
        return await Movie.findOne({
            where: {
                name: name
            }
        });
    }
    static async createMovie(movie) {
        return await Movie.create(movie);
    }
    static async getAllMovie(limit, offset) {
        return await Movie.findAndCountAll({
            limit: limit,
            offset: offset,
            attributes: [
                ["name", "Movie Name"],
                ["releasedOn", "Movie Released Date"],
            ],
            order: [["releasedOn", "ASC"]],
        });
    }
    static async getSpecificMovieDetails(id) {
        return await Movie.findOne({ 
            where: {
                id: id,
                isDeleted: false,
            },
        });
    }
    static async deleteMovie(id) {
        return await Movie.destroy({ where: { id: id } });
    }
    static async checkMovieId(id) {
        return await Movie.findOne({ where: { id: id } });
    }

    static async updateMovie(id, body) {
        return await Movie.update(
            body,
            { where: { id: id } }
        );
    }
    static async checkMovieDetails(movie_details) {
        return await Movie.findOne(
            {
                where: {
                    name: movie_details.name,
                    description: movie_details.description,
                    releasedOn: movie_details.releasedOn,
                }
            }
        );
    }
}
module.exports = MovieService;
