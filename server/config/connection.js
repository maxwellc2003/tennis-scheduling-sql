require('dotenv').config();

const Sequelize = require('sequelize')

//.env file should contain DB_NAME = "name of database" DB_USER = "mysql user" DB_PW = "mysql password"
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });

module.exports = sequelize;