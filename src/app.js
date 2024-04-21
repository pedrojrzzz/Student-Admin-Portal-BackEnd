import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import express from 'express'; // Exportando o express
import homeRouter from './routes/homeRoutes';
import userRouter from './routes/userRoutes';
import tokenRoutes from './routes/tokenRoutes';
import alunoRoutes from './routes/alunoRoutes';
import fotoRoutes from './routes/fotoRoutes';

class App {
  constructor() {
    this.app = express(); // Instanciando o express na variavel this.app
    this.middlewares(); // Instanciando o método middlewares
    this.routes(); // Instanciando o método routes
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true })); // Lidar c/ dados enviado pelo método post
    this.app.use(express.json()); // Lidar c/ JSON enviado p/ o servidor
    const imagePath = resolve(__dirname, '..', 'upload', 'images');
    this.app.use(express.static(imagePath));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
