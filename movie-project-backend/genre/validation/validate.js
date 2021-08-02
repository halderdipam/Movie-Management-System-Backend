const Joi = require("joi");

const validateGenre = (genre) => {
    const schema = Joi.object({
      type: Joi.string().min(1).max(50).required(),
      description: Joi.string().min(3).max(255).required(),
    });
    return schema.validate(genre);
  };

  module.exports = {validateGenre};
