"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async create(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);

      return res.json(novoUser);
    } catch (error) {
      res.status(400); // Status de bad requestion
      return res.json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  /* index */
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  /* Show */
  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id, { attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  /* Update */
  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await _User2.default.update(req.body, {
        where: { id: req.userId },
      });
      return res.json(await _User2.default.findByPk(req.userId, { attributes: ['id', 'nome', 'email'] }));
    } catch (error) {
      return res.json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  /* Delete */
  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário inválido'],
        });
      }
      await _User2.default.destroy({
        where: { id: req.userId },
      });
      return res.json(`Usuário com e-mail /${user.email}/ foi apagado`);
    } catch (error) {
      return res.json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
