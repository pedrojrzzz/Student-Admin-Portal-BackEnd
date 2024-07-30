import multer from 'multer'; // Importando o módulo multer para lidar com uploads de arquivos
import { extname, resolve } from 'path';

// Função para gerar um número aleatório entre 10000 e 20000
var aleatorio = function aleatorio() {
  return Math.floor(Math.random() * 10000 + 10000);
};

// Exportando a configuração do multer
export default {
  fileFilter: function fileFilter(req, file, cb) {
    // Filtrar os arquivos recebidos apenas para imagens PNG ou JPEG
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({
    // Configurando o armazenamento de arquivos no disco
    destination: function destination(req, file, cb) {
      // Função para determinar o diretório de destino dos arquivos
      cb(null, resolve(__dirname, '..', '..', 'upload', 'images')); // Resolvendo o caminho absoluto para o diretório de upload
    },
    filename: function filename(req, file, cb) {
      // Função para determinar o nome do arquivo
      cb(null, "".concat(Date.now(), "_").concat(aleatorio()).concat(extname(file.originalname))); // Gerando um nome único para o arquivo
    }
  })
};