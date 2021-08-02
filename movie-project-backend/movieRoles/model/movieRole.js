const sequelize = require('../../db/sequelize');
const { DataTypes } = require('sequelize');

const MovieRoles = sequelize.define('MovieRole', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isDeleted: {
        allowNull: false,
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    isActive: {
        allowNull: false,
        type:DataTypes.INTEGER,
        defaultValue:1
    },
},{updatedAt:false}
)
module.exports = MovieRoles;


