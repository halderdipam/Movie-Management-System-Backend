const sequelize = require('../../db/sequelize');
const { DataTypes } = require('sequelize');

const MovieStarCast = sequelize.define('MovieStarCast', {
    id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    movieId: {
        //this will be the foriegn Key
        type: DataTypes.UUID,
        allowNull:false,
    },
    starCastId: {
        //this will be the foriegn Key
        type: DataTypes.UUID,
    },
    role: {
        type: DataTypes.INTEGER,
        //this will be the foriegn Key
    },
    startedFrom: {
        type: DataTypes.INTEGER,
        // type: DataTypes.DATE,
    },
    workedTill: {
        type: DataTypes.INTEGER,
        // type: DataTypes.DATE,
        // defaultValue: null,
    },
},
    { updatedAt: false }
);

module.exports = MovieStarCast;