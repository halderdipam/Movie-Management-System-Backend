const GenreService = require("../services/index");
const { validateGenre } = require("../validation/validate");
const auth = require('../../middlewares/auth');

const updateGenres = async (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        let notUpdateGenre = await GenreService.checkGenreId(req.params.id);
        if (notUpdateGenre == null) {//This will be "null" for update<-(Remember):-
            return res.send({ message: "This Genre was not Registered." });
        }
        const id = auth(req);
        const genre_details = {
            type: req.body.type,
            description: req.body.description,
            updatedBy: id
        }
        const checkGenreDetails = await GenreService.checkGenreDetails(genre_details);
        if (checkGenreDetails) {
            res.send({
                success: false,
                message: "This Genre's All Present and Past detalis are same. So, no need to update."
            });
        }
        const updateGenreDetails = await GenreService.updateGenre(req.params.id, genre_details);
        res.send({ status: 201, success: true, message: 'Genre has been successfully Updated' });
    } catch (e) {
        res.status(500).send({ status: 500, success: false, exception: e.message });
    }
};

module.exports = { updateGenres };

