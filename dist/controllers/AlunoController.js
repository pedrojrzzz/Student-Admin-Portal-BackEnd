"use strict";const Aluno = require('../models/Alunos.js');
const Fotos = require('../models/Fotos.js');

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura', 'status'],
        order: [['id', 'DESC'], [Fotos, 'id', 'DESC']], // Toda vez que um novo aluno for criado, ele vai pro topo da lista
        include: {
          model: Fotos,
          attributes: ['url', 'filename'],
        },
      });
      return res.json(alunos);
    } catch (error) {
      return res.status(400).json({
        errors: [error.name],
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename'],
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: [error.name],
      });
    }
  }

  async create(req, res) {
    try {
      console.log(req.body)
      console.log(req.file)
      const dadosAluno = JSON.parse(req.body.aluno);
      const novoAluno = await Aluno.create(dadosAluno);
      const aluno_id = novoAluno.dataValues.id
      const {originalname, filename} = req.file
     
      const fotoAluno = await Fotos.create({ originalname, filename, aluno_id })

      return res.json({novoAluno, fotoAluno});
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  // async create(req, res) {
  //   try {
  //     const novoAluno = await Aluno.create(req.body);
  //     //const {originalName, filename}
  //     const fotoAluno = await Foto.cre

  //     return res.json(novoAluno);
  //   } catch (error) {
  //     return res.status(400).json({
  //       errors: error.errors.map((err) => err.message),
  //     });
  //   }
  // }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['ID Inváldio'],
        });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await Aluno.update(req.body, {
        where: { id },
      });
      return res.status(200).json({
        mensagem: [`Dados cadastrais alterado com sucesso.`]
      });
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

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      await Aluno.destroy({
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

module.exports = new AlunoController();
