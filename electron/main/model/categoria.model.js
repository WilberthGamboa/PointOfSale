
const Sequelize = require('sequelize');
const { sequelize } = require('../db/database');


const Categoria = sequelize.define('categoria', {
    categoriaName: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
module.exports = {Categoria}