const MovieService = require("../services/index");

const getAllMovies = async (req, res) => {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    const offset = page ? page * limit : 0;

    try {
        const movies = await MovieService.getAllMovie(limit, offset);
        const totalPages = Math.ceil(movies.count / limit);
        return res.send({ status: 200, success: true, payload: { Movies: movies.rows, TotalPage: totalPages } });
    } catch (e) {
        res.status(500).send({
            message: "Error -> Can NOT complete a paging request!",
            error: e.message,
        });
    }
}

const getSpecificMovie = async (req, res) => {
    try {
        let checkId = await MovieService.checkMovieId(req.params.id);
        if (checkId == null) {//This will be "null" for update<-(Remember):-
            return res.send({ message: "This Movie was not Registered." });
        }
        const movies = await MovieService.getSpecificMovieDetails(req.params.id);
        return res.send({ status: 200, success: true, payload: movies });
    } catch (e) {
        res.status(500).send({
            message: "Error -> Can not able to fetch the Movie!",
            error: e.message,
        });
    }
}

module.exports = { getAllMovies, getSpecificMovie };











