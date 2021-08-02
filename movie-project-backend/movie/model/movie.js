const sequelize = require('../../db/sequelize');
const { DataTypes } = require('sequelize');

const Movie = sequelize.define('Movie', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    releasedOn: {
        type: DataTypes.DATE(3),
        allowNull: false,
    },
    isDeleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
        allowNull: false,
    },
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false
    },
    updatedBy: {
        type: DataTypes.UUID,
        allowNull: false
    },
}
)
module.exports = Movie;


