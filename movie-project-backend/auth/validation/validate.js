const Joi = require("joi");

const validateUser = (user) => {
    const schema = Joi.object({
        firstname: Joi.string().min(2).max(50).required(),
        lastname: Joi.string().min(1).max(50).required(),
        email: Joi.string().min(1).max(255).required().email(),
        password: Joi.string().min(1).max(255).required(),
        role: Joi.number().integer().required(),
    });
    return schema.validate(user);
};

module.exports = { validateUser };