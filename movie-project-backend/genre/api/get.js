const GenreService = require("../services/index");

const getAllGenres = async (req, res) => {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    const offset = page ? page * limit : 0;

    try {
        const genres = await GenreService.getAllGenre(limit, offset);
        const totalPages = Math.ceil(genres.count / limit);
        return res.send({ status: 200, success: true, payload: { Genres: genres.rows, TotalPage: totalPages } });
    } catch (e) {
        res.status(500).send({
            message: "Error -> Can NOT complete a paging request!",
            error: e.message,
        });
    }
}

const getGenreAllMovies = async (req, res) => {
    const id=req.params.id;
    try {
        const genreAllMovie = await GenreService.getGenreAllMovie(id);
        return res.send({ status: 200, success: true, payload:genreAllMovie });
    } catch (e) {
        res.status(500).send({
            error: e.message,
        });
    }
}

module.exports = { getAllGenres,getGenreAllMovies };