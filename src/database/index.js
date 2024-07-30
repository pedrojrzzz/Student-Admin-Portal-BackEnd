import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Alunos.js'; // Nosso model
import User from '../models/User.js';
import Fotos from '../models/Fotos.js';

const models = [Aluno, User, Fotos]; // Array contendo todos nossos models.

const connection = new Sequelize(databaseConfig); // Nossa conexão

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

export default connection;
