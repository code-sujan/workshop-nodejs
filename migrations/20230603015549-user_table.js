'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.sequelize.query("drop table if exists users");
    await queryInterface.createTable('users',
    {
      id : {
          type: Sequelize.BIGINT,
          primaryKey : true,
          autoIncrement: true,
          allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address : {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 'Not-Set'
      },
      username : {
        type: Sequelize.STRING,
        allowNull : false
      },
      password : {
        type : Sequelize.STRING,
        allowNull : false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
