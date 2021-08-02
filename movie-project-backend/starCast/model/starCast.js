const sequelize = require('../../db/sequelize');
const { DataTypes } = require('sequelize');

const StarCast = sequelize.define('StarCast', {
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
    nationality: {
        //frontend works as 'ENUM' value :-
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1,
        allowNull: false,
    },
}, {
    timestamps: false,
}
)
module.exports = StarCast;