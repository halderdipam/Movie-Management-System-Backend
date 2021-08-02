const StarCastService = require("../services/index");
const { validateStarCast } = require("../validation/validate");

const createStarCasts = async (req, res) => {
    const { error } = validateStarCast(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const isValidStarCast = await StarCastService.validStarCast(req.body.name);
        if (isValidStarCast) return res.send({ message: "This Star-Cast is already registered." })
        const starCast = {
            name: req.body.name,
            nationality: req.body.nationality,
            gender: req.body.gender,
            age: req.body.age,

            // rest of the fields :-
            // isDeleted:req.body.isDeleted,
            // isActive:req.body.isActive
        }
        const starCastCreate = await StarCastService.createStarCast(starCast);
        res.send({ status: 201, success: true, payload: starCastCreate, message: 'Star-Cast has been successfully created.' });
    }
    catch (error) {
        res.status(500).send({ status: 500, success: false, exception: error.message });
    }
}




module.exports = { createStarCasts };