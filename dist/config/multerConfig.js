"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = require("path");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Importando o módulo multer para lidar com uploads de arquivos

// Função para gerar um número aleatório entre 10000 e 20000
var aleatorio = function aleatorio() {
  return Math.floor(Math.random() * 10000 + 10000);
};

// Exportando a configuração do multer
var _default = exports["default"] = {
  fileFilter: function fileFilter(req, file, cb) {
    // Filtrar os arquivos recebidos apenas para imagens PNG ou JPEG
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new _multer["default"].MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: _multer["default"].diskStorage({
    // Configurando o armazenamento de arquivos no disco
    destination: function destination(req, file, cb) {
      // Função para determinar o diretório de destino dos arquivos
      cb(null, (0, _path.resolve)(__dirname, '..', '..', 'upload', 'images')); // Resolvendo o caminho absoluto para o diretório de upload
    },
    filename: function filename(req, file, cb) {
      // Função para determinar o nome do arquivo
      cb(null, "".concat(Date.now(), "_").concat(aleatorio()).concat((0, _path.extname)(file.originalname))); // Gerando um nome único para o arquivo
    }
  })
};