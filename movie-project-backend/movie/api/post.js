const GenreService = require("../../genre/services");
const MovieGenreService = require("../../movieGenre/services");
const MovieRolesService = require("../../movieRoles/services");
const MovieService = require("../services/index");
const StarCastService = require("../../starCast/services");
const MovieStarCastService = require("../../movieStarCast/services");
const auth = require('../../middlewares/auth');
const { validateMovie } = require("../validation/validate");

const createMovies = async (req, res) => {
    const { error } = validateMovie(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const isValidMovie = await MovieService.validMovie(req.body.name);
        if (isValidMovie) return res.send({ message: "This Movie is already registered." });
        const genreIds = req.body.genreIds;
        const existingGenres = await GenreService.getAllGenreById(genreIds);
        if (existingGenres.length < genreIds.length) return res.status(400).send({ message: "Some Genres does not exists." });

        const starCastIds = req.body.starCastIds;
        const existingStarCasts = await StarCastService.getAllStarCastById(starCastIds);
        if (existingStarCasts.length < starCastIds.length) return res.status(400).send({ message: "Some Star-Casts does not exists." });

        const movieRoles = req.body.movieRole;
        const id = auth(req);
        const movie = {
            name: req.body.name,
            description: req.body.description,
            releasedOn: req.body.releasedOn,
            createdBy: id,
            updatedBy: id,
            // rest of the fields :-
            // isDeleted:req.body.isDeleted,
            // isActive:req.body.isActive
        }
        const movieCreate = await MovieService.createMovie(movie);

        // const movieStarCast = {
        //     movieId: movieCreate.id,
        //     starCastId: req.body.starCastId,
        //     role: req.body.role,
        //     startedFrom: req.body.startedFrom,
        //     workedTill: req.body.workedTill.
        // }

        const movieGenres = genreIds.map(item => ({ movieId: movieCreate.id, genreId: item }));
        const movieStarCasts = starCastIds.map(item => ({

            movieId: movieCreate.id,
            starCastId: item,
            role: req.body.role,
            startedFrom: req.body.startedFrom,
            workedTill: req.body.workedTill

        }));

        const createdMovieGenres = await MovieGenreService.createMovieGenres(movieGenres);
        const createMovieRoles = await MovieRolesService.createMovieRoles(movieRoles);
        const createMovieStarCasts = await MovieStarCastService.createMovieStarCasts(movieStarCasts);
        if (!createdMovieGenres.length) return res.status(500).send({ message: "Genre ID cannot find." });
        if (!createMovieRoles) return res.status(500).send({ message: "Movie-Roles cannot be created." });
        if (!createMovieStarCasts.length) return res.status(500).send({ message: "Movie-Star-Cast cannot be created." });
        res.send({ status: 201, success: true, payload: movieCreate, message: 'Movie has been successfully created.' });
    }
    catch (error) {
        res.status(500).send({ status: 500, success: false, exception: error.message });
    }
}

module.exports = { createMovies };