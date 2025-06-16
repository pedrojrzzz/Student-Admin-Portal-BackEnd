const multer = require('multer');
const multerConfig = require('../config/multerConfig.js')

const upload = multer(multerConfig).single('arquivo');

module.exports = (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
          console.log("erro no middleware")
          return res.status(400).json({
            errors: [err.code || 'Erro ao fazer upload'],
          });
        }

        next();
      });
}
