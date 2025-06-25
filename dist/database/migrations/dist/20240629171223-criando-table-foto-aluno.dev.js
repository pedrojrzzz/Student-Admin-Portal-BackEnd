"use strict";"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('fotos', {
              id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              originalname: {
                type: Sequelize.STRING,
                allowNull: false
              },
              filename: {
                type: Sequelize.STRING,
                allowNull: false
              },
              aluno_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                  // Criando a foreignKey
                  model: 'alunos',
                  // Dizendo o model que vamos pegar a foreingKey
                  key: 'id' // Dizendo qual campo vai ser nossa foreignKey

                },
                onDelete: 'CASCADE',
                // Quando user deletar conta, as fotos também somem
                onUpdate: 'CASCADE' // Caso altere o id da maria, ele atualiza dessa tabela também

              },
              created_at: {
                type: Sequelize.DATE,
                allowNull: false
              },
              updated_at: {
                type: Sequelize.DATE,
                allowNull: false
              }
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(queryInterface.dropTable('fotos'));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};