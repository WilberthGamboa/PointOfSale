
const Sequelize = require('sequelize');
const { sequelize } = require('../db/database');
const { Product } = require('./product.model');


const VentaIndivudal = sequelize.define('ventaInvidual', {

  });
  VentaIndivudal.belongsTo(Product, { foreignKey: 'ProductId', allowNull: true });
  module.exports = {VentaIndivudal}
