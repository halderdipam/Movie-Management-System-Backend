const { User } = require('../model');
const jwt = require("jsonwebtoken");


class AuthService {
    static async validUser(email) {
        return await User.findOne({
            where: {
                email: email,
            },
        });
    }
    static async createUser(user) {
        return await User.create(

            user
        );
    }
    static async deleteUser(id) {
        return await User.destroy({ where: { id: id } });
    }
    static jwtToken(user) {
        const token = jwt.sign(
            {   
                id:user.id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password
            },
            "swarup",
            {
                expiresIn: "1d",
            }
        );
        return token;
    }
}

module.exports = AuthService;
