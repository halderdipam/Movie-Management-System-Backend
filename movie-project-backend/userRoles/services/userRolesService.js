const { UserRoles } = require('../model');
const jwt = require("jsonwebtoken");


class UserRolesService {
    static async validUserRole(name) {
        return await UserRoles.findOne({
            where: {
                name: name,
            },
        });
    }
    static async createUserRole(userRole) {
        return await UserRoles.create(

            userRole
        );
    }
    static async deleteUserRoles(id) {
        return await UserRoles.destroy({ where: { id: id } });
    }
}

module.exports = UserRolesService;
