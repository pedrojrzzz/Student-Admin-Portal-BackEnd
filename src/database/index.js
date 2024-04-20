import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Alunos'; // Nosso model
import User from '../models/User';
import Fotos from '../models/Fotos';

const models = [Aluno, User, Fotos]; // Array contendo todos nossos models.

const connection = new Sequelize(databaseConfig); // Nossa conexão

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
