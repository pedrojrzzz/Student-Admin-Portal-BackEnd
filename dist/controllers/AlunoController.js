"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Alunos = require('../models/Alunos'); var _Alunos2 = _interopRequireDefault(_Alunos);
var _Fotos = require('../models/Fotos'); var _Fotos2 = _interopRequireDefault(_Fotos);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Alunos2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [_Fotos2.default, 'id', 'DESC']], // Toda vez que um novo aluno for criado, ele vai pro topo da lista
        include: {
          model: _Fotos2.default,
          attributes: ['url', 'filename'],
        },
      });
      return res.json(alunos);
    } catch (error) {
      return res.status(400).json(
        console.log(error.sqlMessage),
      );
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID Inváldio.'],
        });
      }

      const aluno = await _Alunos2.default.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [[_Fotos2.default, 'id', 'DESC']],
        include: {
          model: _Fotos2.default,
          attributes: ['url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
      return res.json(aluno);
    } catch (error) {
      return res.stuatus(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async create(req, res) {
    try {
      const novoAluno = await _Alunos2.default.create(req.body);
      return res.json(novoAluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['ID Inváldio'],
        });
      }

      const aluno = await _Alunos2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await _Alunos2.default.update(req.body, {
        where: { id },
      });
      return res.json(await _Alunos2.default.findByPk(id));
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID Inválido'],
        });
      }

      const aluno = await _Alunos2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      await _Alunos2.default.destroy({
        where: { id },
      });
      return res.json('Usuário apagado com sucesso');
    } catch (error) {
      return res.status(400).json({
        errors: error,
      });
    }
  }
}

exports. default = new AlunoController();
