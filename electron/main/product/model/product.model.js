
const Sequelize = require('sequelize');
const { sequelize } = require('../../db/database');
const  CategoryModel  = require('../../category/model/category.model');


const ProductModel = sequelize.define('product', {
    productName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    },
    barcode: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false

    }
  });
ProductModel.belongsTo(CategoryModel, { foreignKey: 'categoryId', allowNull: false });

module.exports = ProductModel