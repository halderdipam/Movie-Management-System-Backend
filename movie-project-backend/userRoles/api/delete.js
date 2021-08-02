const UserRolesService = require("../services/index");

const deleteUserRoles = async (req, res) => {
    try {
        let deleteUserRoles = await UserRolesService.deleteUserRoles(req.params.id);
        if (deleteUserRoles == 0) {
            return res.send({ message: "This User-Role was not Registered or Already Deleted." });
        }
        else if (deleteUserRoles == 1) {
            return res.send({ status: 201, success: true, message: `This User-Role's ID ${req.params.id} has been successfully deleted.` });
        }
    } catch (e) {
        res.status(500).send({ status: 500, success: false, exception: e.message });
    }
};

module.exports = { deleteUserRoles };
