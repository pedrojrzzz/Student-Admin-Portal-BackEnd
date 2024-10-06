const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }
  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET); // Caso seja inválido, ele vai pro catch
    const { id, email } = dados; // Fazendo destructure dos dados

    // Checando se dados do payload constam no banco de dados
    const user = await User.findOne({
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
    res.send({
      isLoggedIn: true
    });
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
