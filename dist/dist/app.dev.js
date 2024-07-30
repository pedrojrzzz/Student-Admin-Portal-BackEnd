"use strict";

function _typeof2(o) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof2(o); }
function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }
  return _typeof(obj);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _path = _interopRequireWildcard(require("path"));
require("./database");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _homeRoutes = _interopRequireDefault(require("./routes/homeRoutes"));
var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));
var _tokenRoutes = _interopRequireDefault(require("./routes/tokenRoutes"));
var _alunoRoutes = _interopRequireDefault(require("./routes/alunoRoutes"));
var _fotoRoutes = _interopRequireDefault(require("./routes/fotoRoutes"));
var _checkAuthRoutes = _interopRequireDefault(require("./routes/checkAuthRoutes"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj["default"] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
_dotenv["default"].config({
  path: (0, _path.resolve)(__dirname, '../.env')
});
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
var App = /*#__PURE__*/
function () {
  function App() {
    _classCallCheck(this, App);
    this.app = (0, _express["default"])(); // Instanciando o express na variavel this.app

    this.middlewares(); // Instanciando o método middlewares

    this.routes(); // Instanciando o método routes
  }
  _createClass(App, [{
    key: "middlewares",
    value: function middlewares() {
      this.app.use((0, _cors["default"])(corsOptions));
      this.app.use((0, _helmet["default"])());
      this.app.use(_express["default"].urlencoded({
        extended: true
      })); // Lidar c/ dados enviado pelo método post

      this.app.use(_express["default"].json()); // Lidar c/ JSON enviado p/ o servidor

      this.app.use((0, _cookieParser["default"])());
      this.app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../upload/')));
    }
  }, {
    key: "routes",
    value: function routes() {
      this.app.use('/', _homeRoutes["default"]);
      this.app.use('/users/', _userRoutes["default"]);
      this.app.use('/tokens', _tokenRoutes["default"]);
      this.app.use('/alunos/', _alunoRoutes["default"]);
      this.app.use('/fotos/', _fotoRoutes["default"]);
      this.app.use('/check-auth', _checkAuthRoutes["default"]);
    }
  }]);
  return App;
}();
var _default = new App().app;
exports["default"] = _default;