const Joi = require("joi");

const validateMovie = (movie) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(5).max(255).required(),
    releasedOn: Joi.number().required(),
    genreIds: Joi.array().required(),
    movieRole: Joi.string().min(2).max(50).required(),
    starCastIds: Joi.array().required(),
    role: Joi.number().required(),
    // startedFrom: Joi.number().required(), // this must be date :-
    // workedTill: Joi.number().required(), // this must be date :-
  });
  return schema.validate(movie);
};

const validateMovieUpdate = (updateMovie) =>{
  const schema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    description: Joi.string().min(5).max(255).required(),
    releasedOn: Joi.number().required(),
  });
  return schema.validate(updateMovie);
};

module.exports = { validateMovie,validateMovieUpdate };