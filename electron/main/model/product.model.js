
const Sequelize = require('sequelize');
const { sequelize } = require('../db/database');


const Product = sequelize.define('product', {
    productname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    barcode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    categoria:{
      type: Sequelize.STRING,
    }
  });
module.exports = {Product}