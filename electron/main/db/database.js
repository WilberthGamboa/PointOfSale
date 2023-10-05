const {app} = require("electron")
const path = require('path');

// Configura el directorio de datos de SQLite
const userDataPath = app.getPath('userData');
const dbPath = path.join(userDataPath, 'database.sqlite');

// Configura Sequelize con SQLite
const Sequelize = require('sequelize');
 const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  define: {
    timestamps: false, // This removes the `created_at` and `updated_at` columns
  },
});

 const initDb = () =>{
    sequelize.sync().then(() => {
        console.log("Base de datos creada correctamente");
      }).catch((error) => {
        console.error("Error al crear la base de datos:", error);
      });

}

module.exports = {initDb,sequelize}
