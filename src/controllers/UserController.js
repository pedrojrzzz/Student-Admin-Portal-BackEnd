import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);

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
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  /* Show */
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id, { attributes: ['id', 'nome', 'email'] });
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  /* Update */
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await User.update(req.body, {
        where: { id: req.userId },
      });
      return res.json(await User.findByPk(req.userId, { attributes: ['id', 'nome', 'email'] }));
    } catch (error) {
      return res.json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  /* Delete */
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['Usuário inválido'],
        });
      }
      await User.destroy({
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

export default new UserController();
