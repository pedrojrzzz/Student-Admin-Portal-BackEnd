import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({

      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve conter entre 3 e 255 caracteres.',
          },
        },
      },

      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo sobrenome deve conter entre 3 e 255 caracteres.',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existente em nosso banco de dados,',
        },
        validate: {
          isEmail: {
            msg: 'E-mail inválido.',
          },
        },
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro.',
          },
        },
      },

      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Campo peso, precisar ser um número inteiro ou de ponto flutuante.',
          },
        },
      },

      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Campo altura, precisar ser um número inteiro ou de ponto flutuante.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'alunos',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Fotos, { foreignKey: 'aluno_id' });
  }
}
