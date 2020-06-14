const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  const sequelize = new Sequelize('mvc_tech_blog_db', 'root', 'mysql', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;