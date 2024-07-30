import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Alunos.js'; // Nosso model
import User from '../models/User.js';
import Fotos from '../models/Fotos.js';
var models = [Aluno, User, Fotos]; // Array contendo todos nossos models.

var connection = new Sequelize(databaseConfig); // Nossa conexão

models.forEach(function (model) {
  return model.init(connection);
});
models.forEach(function (model) {
  return model.associate && model.associate(connection.models);
});
export default connection;