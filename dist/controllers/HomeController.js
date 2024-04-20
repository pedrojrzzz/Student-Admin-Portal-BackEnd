"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Alunos = require('../models/Alunos'); var _Alunos2 = _interopRequireDefault(_Alunos);

class HomeController {
  async index(req, res) {
    res.json('index');
  }
}

exports. default = new HomeController();
