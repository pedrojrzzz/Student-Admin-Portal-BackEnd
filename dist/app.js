function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import dotenv from 'dotenv';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
dotenv.config({
  path: resolve(__dirname, '../.env')
});
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
var allowList = ['http://localhost:3000' // Remover em produção, colocar link do seu frontend dps
];
var corsOptions = {
  origin: function origin(_origin, callback) {
    if (allowList.includes(_origin) || !_origin) {
      // Se a origem exister em allowList permita ele passar.
      callback(null, true); // Primeiro argumento null indicando que não há erro, e segundo argumento true indicando que a solicitação é permitida.
    } else {
      callback(new Error('Not allowed by CORS.', false)); // Indicando que há erro, e a solicitação não é permitida.
    }
  },
  credentials: true
};
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.app = express(); // Instanciando o express na variavel this.app
    this.middlewares(); // Instanciando o método middlewares
    this.routes(); // Instanciando o método routes
  }
  return _createClass(App, [{
    key: "middlewares",
    value: function middlewares() {
      this.app.use(cors(corsOptions));
      this.app.use(helmet());
      this.app.use(express.urlencoded({
        extended: true
      })); // Lidar c/ dados enviado pelo método post
      this.app.use(express.json()); // Lidar c/ JSON enviado p/ o servidor
      this.app.use(cookieParser());
      this.app.use(express["static"](resolve(__dirname, '../upload/')));
    }
  }, {
    key: "routes",
    value: function routes() {
      this.app.use('/', homeRouter);
      this.app.use('/users/', userRouter);
      this.app.use('/tokens', tokenRoutes);
      this.app.use('/alunos/', alunoRoutes);
      this.app.use('/fotos/', fotoRoutes);
      this.app.use('/check-auth', checkAuthRoutes);
    }
  }]);
}();
export default new App().app;