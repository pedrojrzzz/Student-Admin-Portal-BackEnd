"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Alunos = require('../models/Alunos'); var _Alunos2 = _interopRequireDefault(_Alunos); // Nosso model
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Fotos = require('../models/Fotos'); var _Fotos2 = _interopRequireDefault(_Fotos);

const models = [_Alunos2.default, _User2.default, _Fotos2.default]; // Array contendo todos nossos models.

const connection = new (0, _sequelize2.default)(_database2.default); // Nossa conexão

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

exports. default = connection;
