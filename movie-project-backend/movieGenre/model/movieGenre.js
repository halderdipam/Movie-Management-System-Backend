const sequelize = require('../../db/sequelize');
const { DataTypes } = require('sequelize');

const MovieGenre = sequelize.define('MovieGenre', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false
    },
    movieId: {
        allowNull: false,
        // type:DataTypes.INTEGER
        type: DataTypes.UUID,
    },
    genreId: {
        allowNull: false,
        type:DataTypes.INTEGER
        // type: DataTypes.UUID,
    },
},{timestamps:false}
)
module.exports = MovieGenre;


