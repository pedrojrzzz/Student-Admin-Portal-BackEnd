const multer = require('multer');
const multerConfig = require('../config/multerConfig.js')

const Fotos = require('../models/Fotos.js');

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
        const { aluno_id } = req.body;
        const { originalname, filename } = req.file;
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
