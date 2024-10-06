const dotenv = require('dotenv');
const {resolve} = require('path')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json')


require('./database/index');

const express = require('express'); // Exportando o express
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const alunoRoutes = require('./routes/alunoRoutes');
const fotoRoutes = require('./routes/fotoRoutes');
const checkAuthRoutes = require('./routes/checkAuthRoutes');

dotenv.config({ path: resolve(__dirname, '../.env') });


const allowList = [
  'http://localhost:3000', // Remover em produção, colocar link do seu frontend dps
];

const corsOptions = {
  origin(origin, callback) {
    if (allowList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS.', false));
    }
  },
  credentials: true,
};

class App {
  constructor() {
    this.app = express(); // Instanciando o express na variável this.app
    this.middlewares(); // Instanciando o método middlewares
    this.routes(); // Instanciando o método routes
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(express.static(resolve(__dirname, '../upload/')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
    this.app.use('/check-auth', checkAuthRoutes);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument) )

  }
}

module.exports = new App().app; // Mudar exportação para CommonJS
