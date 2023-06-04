'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.sequelize.query("truncate students");
    queryInterface.addColumn('students', 'facultyId', {
        type: Sequelize.INTEGER,
        allowNull: false
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('students', 'facultyId');
  }
};
