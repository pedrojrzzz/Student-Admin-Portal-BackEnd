"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);

_dotenv2.default.config({ path: _path.resolve.call(void 0, __dirname, '../.env') });

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express); // Exportando o express
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, ); // Instanciando o express na variavel this.app
    this.middlewares(); // Instanciando o método middlewares
    this.routes(); // Instanciando o método routes
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true })); // Lidar c/ dados enviado pelo método post
    this.app.use(_express2.default.json()); // Lidar c/ JSON enviado p/ o servidor
    this.app.use(_express2.default.static(_path2.default.resolve(__dirname, '../upload/')));
  }

  routes() {
    this.app.use('/', _homeRoutes2.default);
    this.app.use('/users/', _userRoutes2.default);
    this.app.use('/tokens', _tokenRoutes2.default);
    this.app.use('/alunos/', _alunoRoutes2.default);
    this.app.use('/fotos/', _fotoRoutes2.default);
  }
}

exports. default = new App().app;
