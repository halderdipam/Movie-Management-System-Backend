const { StarCast } = require("../model/index");
const { Movie } = require("../../movie/model/index");
// const { MovieStarCast } = require("../../movieStarCast/model/index");

class StarCastService {
    static async validStarCast(name) {
        return await StarCast.findOne({
            where: {
                name: name
            }
        });
    }
    static async createStarCast(starCast) {
        return await StarCast.create(starCast);
    }
    static async getAllStarCast(limit, offset) {
        return await StarCast.findAndCountAll({
            limit: limit,
            offset: offset
        });
    }
    static async getStarCastAllMovie(id) {
        return await StarCast.findOne({
            id,
            include: [Movie],
            // include:[{
            //     model:MovieStarCast,
            //     attributes:["movieId"]
            // }]
        });
    }
    static async getSpecificMovieDetails(id) {
        return await StarCast.findOne({
            where: {
                id: id,
                isDeleted: false,
            },
        });
    }
    static async getAllStarCastById(ids) {
        return await StarCast.findAll({
            id: ids
        });
    }
    static async deleteStarCast(id) {
        return await StarCast.destroy({ where: { id: id } });
    }
    static async checktarCastId(id) {
        return await StarCast.findOne({ where: { id: id } });
    }

    static async updateStarCast(id, body) {
        return await StarCast.update(
            body,
            { where: { id: id } }
        );
    }
    static async checkStarCastdetails(starCast_details) {
        return await StarCast.findOne(
            {
                where: {
                    name: starCast_details.name,
                    nationality: starCast_details.nationality,
                    gender: starCast_details.gender,
                    age: starCast_details.age,
                }
            }
        )
    }
}
module.exports = StarCastService;
