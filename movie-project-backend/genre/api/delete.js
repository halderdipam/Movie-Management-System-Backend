const GenreService = require("../services/index");

const deleteGenres = async (req, res) => {
    try {
        let notDeleteGenre = await GenreService.deleteGenre(req.params.id);
        if (notDeleteGenre == 0) {
            return res.send({ message: "This Genre was not Registered or Already Deleted." });
        }
        else if (notDeleteGenre == 1) {
            return res.send({ status: 201, success: true, message: `This Genre ID ${req.params.id} has been successfully deleted.` });

        }
    } catch (e) {
        res.status(500).send({ status: 500, success: false, exception: e.message });
    }
};

module.exports = { deleteGenres };
