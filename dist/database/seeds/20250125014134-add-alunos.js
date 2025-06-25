"use strict";'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('alunos', [
      {
        nome: 'Pedro',
        sobrenome: 'Odair',
        email: 'pedrin@hotmail.com',
        idade: 23,
        peso: 72.5,
        altura: 1.90,
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Ana',
        sobrenome: 'Silva',
        email: 'ana.silva@gmail.com',
        idade: 30,
        peso: 65.0,
        altura: 1.70,
        status: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Carlos',
        sobrenome: 'Santos',
        email: 'carlos.santos@yahoo.com',
        idade: 28,
        peso: 80.5,
        altura: 1.85,
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Juliana',
        sobrenome: 'Costa',
        email: 'juliana.costa@outlook.com',
        idade: 25,
        peso: 58.3,
        altura: 1.60,
        status: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        nome: 'Lucas',
        sobrenome: 'Martins',
        email: 'lucas.martins@gmail.com',
        idade: 26,
        peso: 70.0,
        altura: 1.75,
        status: true,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('alunos', null, {});
  }
};
