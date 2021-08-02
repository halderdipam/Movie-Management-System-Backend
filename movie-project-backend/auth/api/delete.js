const AuthService = require("../services/index");

const deleteUsers = async (req, res) => {
    try {
        let deleteUser = await AuthService.deleteUser(req.params.id);
        if (deleteUser == 0) {
            return res.send({ message: "This User was not Registered or Already Deleted." });
        }
        else if (deleteUser == 1) {
            return res.send({ status: 201, success: true, message: `This User ID ${req.params.id} has been successfully deleted.` });
        }
    } catch (e) {
        res.status(500).send({ status: 500, success: false, exception: e.message });
    }
};

module.exports = { deleteUsers };
