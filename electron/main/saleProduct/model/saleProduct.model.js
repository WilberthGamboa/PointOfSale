
const { sequelize } = require('../../db/database');
const ProductModel  = require('../../product/model/product.model');


const SaleProductModel = sequelize.define('saleProduct', {
  
});
  SaleProductModel.belongsTo(ProductModel, { foreignKey: 'ProductId', allowNull: true });

  module.exports = SaleProductModel
