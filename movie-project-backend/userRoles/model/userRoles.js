const sequelize = require('../../db/sequelize')
const { DataTypes } = require('sequelize')

const UserRoles = sequelize.define('UserRoles', {
    id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false }
)
module.exports = UserRoles;


