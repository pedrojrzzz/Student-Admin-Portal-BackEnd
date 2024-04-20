"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET); // Caso seja inválido ele vai pro catch
    const { id, email } = dados; // Fazendo destructure dos dados

    // Checando se dados do payload, constam no banco de dados
    const user = await _User2.default.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id; // Atrelando os dados do usuário a cada requisição que passar pelo middleware
    req.userEmail = email; // Atrelando os dados do usuário a cada requisição que passar pelo middleware
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
