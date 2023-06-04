const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('workshop_db', 'postgres', 'data-safety', {
    host: 'localhost',
    dialect: 'postgres'
  });

  module.exports = sequelize;