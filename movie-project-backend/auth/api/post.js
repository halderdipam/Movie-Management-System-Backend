const AuthService = require('../services/authService');
const { validateUser } = require("../validation/validate");
const bcrypt = require('bcrypt');

// Register
const registerAuth = async (req, res) => {
    const { error } = validateUser(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    try {
        const isValidUser = await AuthService.validUser(req.body.email);
        if (isValidUser) return res.send({ message: "This User is already registered." })
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: password,
            role: req.body.role
        }
        const createUser = await AuthService.createUser(user);
        const jwtToken = await AuthService.jwtToken(createUser);
        return res.header('Authorization', jwtToken).send({ status: 200, success: true, payload: createUser, message: null })
    }
    catch (err) {
        return res.send({ status: 500, success: false, exception: err })
    }
}

// login
const loginAuth = async (req, res) => {
    try {
        let password = req.body.password;
        const isValidUser = await AuthService.validUser(req.body.email);
        if (!isValidUser) return res.status(404).json({ msg: 'User not registered' });
        const isValidPassword = await bcrypt.compareSync(password, isValidUser.password);
        if (!isValidPassword) res.status(401).send({ msg: "Unauthorized Access. Wrong Password." });
        const jwtToken = AuthService.jwtToken(isValidUser);
        if (!jwtToken)
            return res.send({
                status: 409,
                success: false,
                message: "Login Failed. Please Try Again Later!",
            });
        return res.header("Authorization", jwtToken).send({
            status: 200,
            success: true,
            payload: isValidUser.email,
        }
        )
    }
    catch (err) {
        return res.send({ status: 500, success: false, exception: err });
    }
}

module.exports = { registerAuth, loginAuth };