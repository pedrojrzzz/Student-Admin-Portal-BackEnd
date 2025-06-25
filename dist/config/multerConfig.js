"use strict";const multer = require('multer') // Importando o módulo multer para lidar com uploads de arquivos
const { extname, resolve } = require('path')

// Função para gerar um número aleatório entre 10000 e 20000
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// Exportando a configuração do multer
module.exports = {
  fileFilter: (req, file, cb) => { // Filtrar os arquivos recebidos apenas para imagens PNG ou JPEG
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }
    return cb(null, true);
  },
  storage: multer.diskStorage({ // Configurando o armazenamento de arquivos no disco
    destination: (req, file, cb) => { // Função para determinar o diretório de destino dos arquivos
      cb(null, resolve(__dirname, '..', '..', 'upload', 'images')); // Resolvendo o caminho absoluto para o diretório de upload
    },
    filename: (req, file, cb) => { // Função para determinar o nome do arquivo
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); // Gerando um nome único para o arquivo
    },
  }),
};
