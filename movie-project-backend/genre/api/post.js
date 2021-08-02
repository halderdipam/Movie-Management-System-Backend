const GenreService = require("../services/index");
const { validateGenre } = require("../validation/validate");
const auth = require('../../middlewares/auth');
const createGenres = async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const isValidGenre = await GenreService.validGenre(req.body.type);
        if (isValidGenre) return res.send({ message: "This Genre is already registered." });
        const id = auth(req);
        const genre = {
            type: req.body.type,//this must be bulk create:-
            description: req.body.description,
            createdBy:id,
            updatedBy: id,
            // rest of the fields :-
            // isDeleted:req.body.isDeleted,
            // isActive:req.body.isActive
        }
        const genreCreate = await GenreService.createGenre(genre);
        res.send({ status: 201, success: true, payload: genreCreate.type, message: 'Genre has been successfully created' });
    }
    catch (error) {
        res.status(500).send({ status: 500, success: false, exception: error.message });
    }
}


module.exports = { createGenres };