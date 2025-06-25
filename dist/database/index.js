"use strict";const Sequelize = require('sequelize');
const databaseConfig = require('../config/database'); // Remover a extensão .js
const Aluno = require('../models/Alunos'); // Nosso model
const User = require('../models/User');
const Fotos = require('../models/Fotos');

const models = [Aluno, User, Fotos]; // Array contendo todos nossos models.

const connection = new Sequelize(databaseConfig); // Nossa conexão

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

module.exports = connection; // Mudar exportação para CommonJS
