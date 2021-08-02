const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    'Movie_Db',
    'sa',
    'tftus@123',
    {
        dialect: 'mssql',
        logging: false,
        host: 'localhost',
        pool: { max: 5, min: 0, idle: 10000 }
    }
)
sequelize.authenticate()
    .then(() => {
        console.log("Database Connection established Successfully.");
    })
    .catch(err => {
        console.log(`Database Connection establishment Failed. Error found - ${err}`);
    })
module.exports = sequelize;