"use strict";const Sequelize = require('sequelize');
const bcryptjs = require('bcryptjs');
const { Model } = Sequelize; // Desestruturar Model

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
            },
          },
        },

        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Esse e-mail já está em uso.',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido.',
            },
          },
        },

        password_hash: { // Esse campo não precisa ser validado, pois o usuário não vai enviar ele
          type: Sequelize.STRING,
        },

        password: {
          type: Sequelize.VIRTUAL,
          allowNull: false,
          validate: {
            len: {
              args: [6, 50],
              msg: 'Campo senha precisa ter entre 6 e 50 caracteres.',
            },
            notNull: {
              msg: 'Campo senha é obrigatório',
            },
          },
        }, // esse campo não existe no Banco de dados
      },
      { sequelize },
    );

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }

  passwordIsValid(sentPassword) {
    return bcryptjs.compare(sentPassword, this.password_hash); // Isso retorna uma promise
    // Vamos checar essa promise no controller
  }
}

module.exports = User; // Exportação em CommonJS
