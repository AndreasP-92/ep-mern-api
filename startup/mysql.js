require('dotenv').config();
const Sequelize = require("sequelize");




// module.exports = db;

const initializeMysql = () => {
  const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.users = require("../Model/mysql/Users")(sequelize, Sequelize);

  return db;
}

const connectMysql = (db) =>{


  db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
}


module.exports = {
  initializeMysql,
  connectMysql
}
