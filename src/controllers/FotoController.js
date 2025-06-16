const multer = require('multer');
const multerConfig = require('../config/multerConfig.js')
const fs = require('fs')
const {resolve} = require('path')

const Fotos = require('../models/Fotos.js');
const Aluno = require('../models/Alunos.js');
const { Console } = require('console');

const upload = multer(multerConfig).single('arquivo');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }
      try {
        console.log(req.body)
        const { aluno_id } = req.body;
        console.log(aluno_id)
        const { originalname, filename } = req.file;

        // Checando se o id está em branco
        if(!aluno_id) {
          return res.status(401).json({
            errors: ['Id inválido']
          })
        }

        // Checando se o aluno já possui foto
        const userHasPhoto = await Fotos.findOne({where: { aluno_id }})
        if (userHasPhoto) {
          return res.status(401).json({
            errors: ['Aluno já possui foto']
          })
        }
  
        const foto = await Fotos.create({ originalname, filename, aluno_id });
        return res.json(foto);
      } catch (erro) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }

  // Método update
  update(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error]
        })
      }
      try {
      const { aluno_id } = req.body;
      if (!aluno_id) {
        return res.status(401).json({
          errors: ['Id inválido']
        })
      }

      const alunoHasPhoto = await Fotos.findOne({where: {aluno_id}})
      if (!alunoHasPhoto) {
        return res.status(401).json({
          errors: ['Aluno não possui foto pra atualizar']
        })
      }

      const previousFileName = alunoHasPhoto._previousDataValues.filename
      fs.unlink(resolve(__dirname, '..', '..', 'upload', 'images', previousFileName), (err) => {
        if (err) {
          console.log(`Error ao excluir arquivo anterior: ${err}`)
        }
          else {
            console.log(`Arquivo anterior: ${previousFileName} deletado com sucesso`)
          }
      })



      const { originalname, filename } = req.file;
      const foto = await Fotos.update({originalname, filename, aluno_id}, {where: {aluno_id}})
      console.log(`Usuário id: ${aluno_id}, alterou sua imagem com sucesso, {NovoArquivo: ${req.file.filename}}`)
      res.status(200).json({
        mensagem: ['Imagem alterada com sucesso']
      })
      
      } catch(error2) {
        console.error(`Erro ao atualizar foto: ${error2} `)
        res.status(500).json({
          errors: ['Erro interno do servidor.']
        })
      } 
      
    })
  }
}

module.exports = new FotoController();
