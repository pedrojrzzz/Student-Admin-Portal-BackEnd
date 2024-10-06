const jwt = require('jsonwebtoken');
/* eslint-disable */
class CheckAuthController {
  async check(req, res) {
    const { token } = req.cookies;
    console.log(req.headers)
    console.log(`user fez requisição esse é o token dele: ${token}`);

    console.log(req.headers);

    if (!token) {
      return res.status(401).json({
        errors: ['Usuário não autenticado1'],
        isAuthenticated: false,
      });
    }

    jwt.sign(token, process.env.TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          errors: ['Usuário não encontrado2'],
          isAuthenticated: false,
        });
      }

      return res.status(200).json({
        isAuthenticated: true,
        decoded,
      });
    });
  }
}

module.exports = new CheckAuthController();
