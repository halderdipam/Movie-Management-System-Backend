const Joi = require("joi");

const validateStarCast = (starCast) => {
    const schema = Joi.object({
      name: Joi.string().min(2).required(),
      nationality: Joi.string().min(2).required(),
      gender: Joi.string().min(4).max(5).required(),
      age: Joi.number().integer().required(),
  
    });
    return schema.validate(starCast);
  };
  

module.exports = {validateStarCast};