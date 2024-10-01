import dotenv from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import './database/index.js';

import express from 'express'; // Exportando o express
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import homeRouter from './routes/homeRoutes.js';
import userRouter from './routes/userRoutes.js';
import tokenRoutes from './routes/tokenRoutes.js';
import alunoRoutes from './routes/alunoRoutes.js';
import fotoRoutes from './routes/fotoRoutes.js';
import checkAuthRoutes from './routes/checkAuthRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env') });


const allowList = [
  'http://localhost:3000', // Remover em produção, colocar link do seu frontend dps
];

const corsOptions = {
  origin(origin, callback) {
    if (allowList.includes(origin) || !origin) { // Se a origem exister em allowList permita ele passar.
      callback(null, true); // Primeiro argumento null indicando que não há erro, e segundo argumento true indicando que a solicitação é permitida.
    } else {
      callback(new Error('Not allowed by CORS.', false)); // Indicando que há erro, e a solicitação não é permitida.
    }
  },
  credentials: true,
};

class App {
  constructor() {
    this.app = express(); // Instanciando o express na variavel this.app
    this.middlewares(); // Instanciando o método middlewares
    this.routes(); // Instanciando o método routes
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true })); // Lidar c/ dados enviado pelo método post
    this.app.use(express.json()); // Lidar c/ JSON enviado p/ o servidor
    this.app.use(cookieParser());
    this.app.use(express.static(resolve(__dirname, '../upload/')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
    this.app.use('/check-auth', checkAuthRoutes);
  }
}

export default new App().app;
