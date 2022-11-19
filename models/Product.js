const sequelize = require("./index");
const { DataTypes } = require("sequelize");

const Product = sequelize.define("product", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    image: {
        type: DataTypes.STRING
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.TEXT
    },
    published: {
        type: DataTypes.BOOLEAN
    }

})

module.exports = Product;