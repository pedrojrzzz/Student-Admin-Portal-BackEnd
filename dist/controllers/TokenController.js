"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body; // Destructure para recebermos os dados do usuário

    // Checando se o usuário enviou o e-mail e o password
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credencias inválidas'],
      });
    }

    // Checando se e-mail e senha existem no banco de dados
    const user = await _User2.default.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }

    // Checando se a senha está correta
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token, user: { id: user.id, nome: user.nome, email: user.email } });
  }
}

exports. default = new TokenController();
