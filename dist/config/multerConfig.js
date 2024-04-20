"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer); // Importando o módulo multer para lidar com uploads de arquivos
var _path = require('path');

// Função para gerar um número aleatório entre 10000 e 20000
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// Exportando a configuração do multer
exports. default = {
  fileFilter: (req, file, cb) => { // Filtrar os arquivos recebidos apenas para imagens PNG ou JPEG
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer2.default.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({ // Configurando o armazenamento de arquivos no disco
    destination: (req, file, cb) => { // Função para determinar o diretório de destino dos arquivos
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'upload', 'images')); // Resolvendo o caminho absoluto para o diretório de upload
    },
    filename: (req, file, cb) => { // Função para determinar o nome do arquivo
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`); // Gerando um nome único para o arquivo
    },
  }),
};
