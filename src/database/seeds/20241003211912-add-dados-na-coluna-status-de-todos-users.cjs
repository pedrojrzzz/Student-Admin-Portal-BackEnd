/* eslint-disable no-undef */
// 'use strict';




/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      const idsToUpdate = [1,4];
      await queryInterface.bulkUpdate('alunos', {status: 0}, {id: idsToUpdate});
    } catch(e) {
      console.log(e);
      throw new Error('Erro ao atualizaro o BD');
      
    }
    
  },

  async down (queryInterface, Sequelize) {/* eslint-disable no-undef */
    // 'use strict';
    
    
    
    
    /** @type {import('sequelize-cli').Migration} */
    
    module.exports = {
      async up (queryInterface, Sequelize) {
        try {
          await queryInterface.bulkUpdate('alunos', {status: 0}, {where: {nome: 'Pedro'}});
        } catch(e) {
          console.log(e);
          throw new Error('Erro ao atualizaro o BD');
          
        }
        
      },
    
      async down (queryInterface, Sequelize) {
        await queryInterface.bulkUpdate('alunos', {status: 1}, {where: {nome: 'Pedro'}});
    
      }
    };
    

  }
};
