const sequelize = require("./sequelize");

const { MovieRole } = require("../movieRoles/model/index");
const { User } = require("../auth/model/index");
const { Movie } = require("../movie/model/index");
const { StarCast } = require("../starCast/model/index");
const { Genre } = require("../genre/model/index");
const { UserRoles } = require("../userRoles/model/index");
const { MovieStarCast } = require("../movieStarCast/model/index");
const { MovieGenre } = require("../MovieGenre/model/index");


// StarCast.hasMany(MovieStarCast, {
//   foreignKey: "starCastId",
//   onDelete: "NO ACTION",
//   onUpdate: "CASCADE",
// });

// Genre.hasMany(MovieGenre, {
//   foreignKey: "genreId",
//   onDelete: "NO ACTION",
//   onUpdate: "CASCADE",
// });

Genre.belongsToMany(Movie, { through: 'MovieGenre', foreignKey: "genreId", otherKey: "movieId" });
StarCast.belongsToMany(Movie, { through: 'MovieStarCast', foreignKey: "starCastId", otherKey: "movieId" });//ishan

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Model created sucessfully.");
  })
  .catch((err) => {
    console.log("error: ", err);
  });

module.exports = {
  MovieRole,
  User,
  Movie,
  StarCast,
  Genre,
  UserRoles,
  MovieStarCast,
  MovieGenre,
};
