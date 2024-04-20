"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { // Criando a foreignKey
          model: 'alunos', // Dizendo o model que vamos pegar a foreingKey
          key: 'id', // Dizendo qual campo vai ser nossa foreignKey
        },
        onDelete: 'CASCADE', // Quando user deletar conta, as fotos também somem
        onUpdate: 'CASCADE', // Caso altere o id da maria, ele atualiza dessa tabela também
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fotos');
  },
};
