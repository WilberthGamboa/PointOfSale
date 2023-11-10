const Sequelize = require('sequelize');
const { sequelize } = require('../../db/database');
const ProductModel  = require('../../product/model/product.model');



const CategoryModel = sequelize.define('category', {
    categoryName: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });


module.exports = CategoryModel