const Joi = require("joi");

const validateUserRoles = (userRoles) => {
    const schema = Joi.object({
      name: Joi.string().min(5).max(50).required(),
    });
    return schema.validate(userRoles);
  };
  

module.exports = { validateUserRoles };