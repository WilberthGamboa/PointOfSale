
const Sequelize = require('sequelize');
const { sequelize } = require('../db/database');


const VentaIndivudal = sequelize.define('product', {
    
    total: {
        type: Sequelize.FLOAT,
        allowNull: false

    },
    categoria:{
      type: Sequelize.STRING,
    },
    fecha:{
        type: Sequelize.DATE,
      }
  });
  module.exports = {VentaIndividual}
