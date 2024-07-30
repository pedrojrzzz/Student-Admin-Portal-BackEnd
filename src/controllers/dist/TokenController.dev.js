"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TokenController =
/*#__PURE__*/
function () {
  function TokenController() {
    _classCallCheck(this, TokenController);
  }

  _createClass(TokenController, [{
    key: "create",
    value: function create(req, res) {
      var _req$body, _req$body$email, email, _req$body$password, password, user, id, token;

      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, _req$body$email = _req$body.email, email = _req$body$email === void 0 ? '' : _req$body$email, _req$body$password = _req$body.password, password = _req$body$password === void 0 ? '' : _req$body$password; // Destructure para recebermos os dados do usuário
              // Checando se o usuário enviou o e-mail e o password

              if (!(!email || !password)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                errors: ['Endereço de e-mail ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.']
              }));

            case 3:
              _context.next = 5;
              return regeneratorRuntime.awrap(_User["default"].findOne({
                where: {
                  email: email
                }
              }));

            case 5:
              user = _context.sent;

              if (user) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                errors: ['Endereço de e-mail ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.']
              }));

            case 8:
              _context.next = 10;
              return regeneratorRuntime.awrap(user.passwordIsValid(password));

            case 10:
              if (_context.sent) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                errors: ['Endereço de e-mail ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.']
              }));

            case 12:
              id = user.id;
              token = _jsonwebtoken["default"].sign({
                id: id,
                email: email
              }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION
              });
              res.cookie('token', token);
              console.log("user logado: ".concat(token));
              return _context.abrupt("return", res.json({
                user: {
                  id: user.id,
                  nome: user.nome,
                  email: user.email
                },
                code: 'SUCCESS'
              }));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return TokenController;
}();

var _default = new TokenController();

exports["default"] = _default;