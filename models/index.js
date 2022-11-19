const config = require('../db/config');

const { Sequelize, DataTypes } = require('sequelize');
const { DB } = require('../db/config');

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect
})

sequelize.authenticate().then((res) => {
    console.log("Autentificat");
    sequelize.sync({ force: false })
        .then((res) => { console.log("Synced"); })
        .catch((err) => { console.log("Sync failed") });

}).catch((err) => {
    console.log("Error");
})

module.exports = sequelize;