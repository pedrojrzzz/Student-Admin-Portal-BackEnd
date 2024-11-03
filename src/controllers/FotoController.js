const multer = require('multer');
const multerConfig = require('../config/multerConfig.js')

const Fotos = require('../models/Fotos.js');
const Aluno = require('../models/Alunos.js');

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
}

module.exports = new FotoController();
