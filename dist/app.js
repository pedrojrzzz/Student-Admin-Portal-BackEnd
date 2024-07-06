"use strict";

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
var _homeRoutes = _interopRequireDefault(require("./routes/homeRoutes"));
var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));
var _tokenRoutes = _interopRequireDefault(require("./routes/tokenRoutes"));
var _alunoRoutes = _interopRequireDefault(require("./routes/alunoRoutes"));
var _fotoRoutes = _interopRequireDefault(require("./routes/fotoRoutes"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
_dotenv["default"].config({
  path: (0, _path.resolve)(__dirname, '../.env')
});

// Exportando o express

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
  }
};
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.app = (0, _express["default"])(); // Instanciando o express na variavel this.app
    this.middlewares(); // Instanciando o método middlewares
    this.routes(); // Instanciando o método routes
  }
  return _createClass(App, [{
    key: "middlewares",
    value: function middlewares() {
      this.app.use((0, _cors["default"])(corsOptions));
      this.app.use((0, _helmet["default"])());
      this.app.use(_express["default"].urlencoded({
        extended: true
      })); // Lidar c/ dados enviado pelo método post
      this.app.use(_express["default"].json()); // Lidar c/ JSON enviado p/ o servidor
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
    }
  }]);
}();
var _default = exports["default"] = new App().app;