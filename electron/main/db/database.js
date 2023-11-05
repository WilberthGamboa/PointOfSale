const {app} = require("electron")
const path = require('path');

// Configura el directorio de datos de SQLite
const userDataPath = app.getPath('userData');
const dbPath = path.join(userDataPath, 'database.sqlite');

// Configura Sequelize con SQLite
const Sequelize = require('sequelize');
 const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath
});

 const initDb = async () =>{
  try {
    await sequelize.authenticate(); // Intenta establecer la conexión a la base de datos
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  } 

}

module.exports = {initDb,sequelize}
