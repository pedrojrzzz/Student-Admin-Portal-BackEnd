import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';
import { password } from '../config/database';

export default class User extends Model {
  static init(sequelize) {
    super.init({

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
          msg: 'E-mail já existente em nosso servidor, por favor tente outro.',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },

      password_hash: { // Esse campo n/ precisa ser validado, pq o user n/ vai enviar ele
        type: Sequelize.STRING,
        defaultValue: '',
      },

      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Campo senha precisa ter entre 6 e 50 caracteres.',
          },
        },
      }, // esse campo não existe no Banco de dados
    }, { sequelize });

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(sentPassword) {
    return bcryptjs.compare(sentPassword, this.password_hash); // Isso retorna uma promise
    // Vamos checar essa promise no controller
  }
}
