const StarCastService = require("../services/index");

const getAllStarCasts = async (req, res) => {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    const offset = page ? page * limit : 0;

    try {
        const starCasts = await StarCastService.getAllStarCast(limit, offset);
        const totalPages = Math.ceil(starCasts.count / limit);
        return res.send({ status: 200, success: true, payload: { starCasts: starCasts.rows, TotalPage: totalPages } });
    } catch (e) {
        res.status(500).send({
            message: "Error -> Can NOT complete a paging request!",
            error: e.message,
        });
    }
}

const getStarCastAllMovies = async (req, res) => {
    const id=req.params.id;
    try {
        const starCastsAllMovie = await StarCastService.getStarCastAllMovie(id);
        return res.send({ status: 200, success: true, payload:starCastsAllMovie });
    } catch (e) {
        res.status(500).send({
            error: e.message,
        });
    }
}
module.exports = { getAllStarCasts, getStarCastAllMovies };











