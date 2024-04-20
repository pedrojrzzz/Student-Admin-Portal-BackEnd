import jwt from 'jsonwebtoken';
import User from '../models/User';

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
    const user = await User.findOne({ where: { email } });
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
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.json({ token });
  }
}

export default new TokenController();
