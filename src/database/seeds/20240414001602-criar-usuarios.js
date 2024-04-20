const bcryptjs = require('bcryptjs');

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'john@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe2',
          email: 'john2@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe3',
          email: 'john3@gmail.com',
          password_hash: await bcryptjs.hash('123456', 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('users', null, {});
  },
};
