/* eslint-disable no-undef */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos', 'status', {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('alunos', 'status');
  }
};
