const Sequelize = require('sequelize');
const { sequelize } = require('../../db/database');
const Sale = sequelize.define('sale', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false

    },
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

module.exports = Sale;