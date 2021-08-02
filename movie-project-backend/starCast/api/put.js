const StarCastService = require("../services/index");
const { validateStarCast } = require("../validation/validate");

const updateStarCasts = async (req, res) => {
    const { error } = validateStarCast(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        let notUpdateStarCast = await StarCastService.checktarCastId(req.params.id);
        if (notUpdateStarCast == null) {
            return res.send({ message: "This Star-Cast was not Registered." });
        }
        const starCast_details = {
            name: req.body.name,
            nationality: req.body.nationality,
            gender: req.body.gender,
            age: req.body.age,
        }
        const checkStarCastDetails = await StarCastService.checkStarCastdetails(starCast_details);
        if (checkStarCastDetails) {
            res.send({
                success: false,
                message: "This Star-Cast's All Present and Past detalis are same. So, no need to update."
            });
        }
        const updateStarCastDetails = await StarCastService.updateStarCast(req.params.id, starCast_details);
        res.send({ status: 201, success: true, message: 'Star-Cast has been successfully Updated' });
    } catch (e) {
        res.status(500).send({ status: 500, success: false, exception: e.message });
    }
};

module.exports = { updateStarCasts };

