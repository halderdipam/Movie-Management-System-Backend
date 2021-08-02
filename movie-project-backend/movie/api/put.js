const MovieService = require("../services/index");
const { validateMovieUpdate } = require("../validation/validate");
const auth = require('../../middlewares/auth');
const updateMovies = async (req, res) => {
    const { error } = validateMovieUpdate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        let notUpdateMovie = await MovieService.checkMovieId(req.params.id);
        if (notUpdateMovie == null) {//This will be "null" for update<-(Remember):-
            return res.send({ message: "This Movie was not Registered." });
        }
        const id = auth(req);
        const movie_details = {
            name: req.body.name,
            description: req.body.description,
            releasedOn: req.body.releasedOn,
            updatedBy: id
        }
        const checkMovieDetails = await MovieService.checkMovieDetails(movie_details);
        if (checkMovieDetails) {
            res.send({
                success: false,
                message: "This Movie's All Present and Past detalis are same. So, no need to update."
            });
        }
        const updateMovieDetails = await MovieService.updateMovie(req.params.id, movie_details);
        res.send({ status: 201, success: true, message: 'Movie has been successfully Updated' });
    } catch (e) {
        res.status(500).send({ status: 500, success: false, exception: e.message });
    }
};

module.exports = { updateMovies };

