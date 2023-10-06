
const Sequelize = require('sequelize');
const { sequelize } = require('../db/database');
const { Categoria } = require('./categoria.model');


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

    }
  });
  Product.belongsTo(Categoria, { foreignKey: 'categoriaId', allowNull: true });
module.exports = {Product}