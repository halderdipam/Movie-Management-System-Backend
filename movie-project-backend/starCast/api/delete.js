const StarCastService = require("../services/index");

const deleteStarCasts = async (req, res) => {
    try {
        let notDeleteStarCast = await StarCastService.deleteStarCast(req.params.id);
        if (notDeleteStarCast == 0) {
            return res.send({ message: "This Star-Cast was not Registered or Already Deleted." });
        }
        else if (notDeleteStarCast == 1) {
            return res.send({ status: 201, success: true, message: `This Star-Cast ID ${req.params.id} has been successfully deleted.` });

        }
    } catch (e) {
        res.status(500).send({ status: 500, success: false, exception: e.message });
    }
};

module.exports = { deleteStarCasts };
