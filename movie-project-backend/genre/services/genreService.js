const { Genre } = require("../model/index");
// const { MovieGenre } = require("../../movieGenre/model/index");
const { Movie } = require("../../movie/model/index");

class GenreService {
    static async validGenre(type) {
        return await Genre.findOne({
            where: {
                type: type
            }
        });
    }
    static async createGenre(genre) {
        return await Genre.create(genre);
    }
    static async getAllGenre(limit, offset) {
        return await Genre.findAndCountAll({
            limit: limit,
            offset: offset,
            attributes: [
                ["type", "Genre type"],
                ["description", "Genre description"],
            ],
        });
    }
    static async getGenreAllMovie(id) {
        return await Genre.findOne({
            id,
            // include: [MovieGenre],
            include: [Movie]
            // include:[{
            //     model:MovieStarCast,
            //     attributes:["movieId"]
            // }]
        });
    }
    static async getAllGenreById(ids) {
        return await Genre.findAll({
            id: ids
        });
    }
    static async deleteGenre(id) {
        return await Genre.destroy({ where: { id: id } });
    }
    static async checkGenreId(id) {
        return await Genre.findOne({ where: { id: id } });
    }

    static async updateGenre(id, body) {
        return await Genre.update(
            body,
            { where: { id: id } }
        );
    }
    static async checkGenreDetails(genre_details) {
        return await Genre.findOne(
            {
                where: {
                    type: genre_details.type,
                    description: genre_details.description
                }
            }
        );
    }
}
module.exports = GenreService;
