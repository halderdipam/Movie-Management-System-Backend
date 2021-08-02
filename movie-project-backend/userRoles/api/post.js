const UserRolesService = require('../services/index');
const { validateUserRoles } = require("../validation/validate");

// Register
const createUserRoles = async (req, res) => {
    const { error } = validateUserRoles(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const isValidUserRole = await UserRolesService.validUserRole(req.body.name);
        if (isValidUserRole) return res.send({ message: "This User-Role is already registered." })

        const userRole = {
            name: req.body.name,
        }
        const createUserRole = await UserRolesService.createUserRole(userRole);
        return res.send({ status: 200, success: true, payload: createUserRole, message: null })
    }
    catch (err) {
        return res.send({ status: 500, success: false, exception: err });
    }
}

module.exports = { createUserRoles };