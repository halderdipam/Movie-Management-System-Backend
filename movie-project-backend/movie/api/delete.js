const MovieService = require("../services/index");

const deleteMovies = async (req, res) => {
    try {
        let notDeleteMovie = await MovieService.deleteMovie(req.params.id);
        if (notDeleteMovie == 0) {
            return res.send({ message: "This Movie was not Registered or Already Deleted." });
        }
        else if (notDeleteMovie == 1) {
            return res.send({ status: 201, success: true, message: `This Movie ID ${req.params.id} has been successfully deleted.` });

        }
    } catch (e) {
        res.status(500).send({ status: 500, success: false, exception: e.message });
    }
};

module.exports = { deleteMovies };
