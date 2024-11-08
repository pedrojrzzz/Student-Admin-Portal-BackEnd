const jwt = require('jsonwebtoken')
const User = require('../models/User.js')
const dotenv = require('dotenv');
const { resolve } = require('path')




dotenv.config({ path: resolve(__dirname, '../.env') });

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body; // Destructure para recebermos os dados do usuário

    // Checando se o usuário enviou o e-mail e o password
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Endereço de e-mail ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.'],
      });
    }

    // Checando se e-mail e senha existem no banco de dados
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['Endereço de e-mail ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.'],
      });
    }

    // Checando se a senha está correta
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Endereço de e-mail ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.'],
      });
    }

    const { id } = user;
    console.log(process.env.TOKEN_EXPIRATION)
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    res.cookie('token', token, {httpOnly: true, secure: true}); // Provavelmente não funciona com http
    console.log(`Usuário: ${user}, fez login.`)
    return res.json({
      user: { id: user.id, nome: user.nome, email: user.email },
      token, // NÃO É SEGURO DEIXAR O TOKEN JWT AQUI, ELE DEVE SER ENVIADO COM HTTPONLY, MAS SÓ FUNCIONARIA COM HTTPS, NÃO VOU USAR POR ENQUANTO
      code: 'SUCCESS',
    });
  }

  async userIsAuthorized(req, res) {
    res.status(200).json({
      success: ['Token validado com sucesso, usuário autorizado']
    })
  }
}

module.exports = new TokenController();