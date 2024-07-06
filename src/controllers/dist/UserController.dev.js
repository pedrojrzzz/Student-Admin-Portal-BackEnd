"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, [{
    key: "create",
    value: function create(req, res) {
      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              console.log(req.body);
              _context.next = 4;
              return regeneratorRuntime.awrap(_User["default"].create(req.body));

            case 4:
              return _context.abrupt("return", res.status(200).json({
                message: 'Usuário criado com sucesso.',
                code: 'SUCCESS'
              }));

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              _context.t0.errors.map(function (errorMessage) {
                return console.log({
                  errors: errorMessage.message
                });
              });

              res.status(400); // Status de bad requestion

              return _context.abrupt("return", res.json({
                errors: _context.t0.errors.map(function (err) {
                  return err.message;
                })
              }));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
    /* index */

  }, {
    key: "index",
    value: function index(req, res) {
      var users;
      return regeneratorRuntime.async(function index$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(_User["default"].findAll({
                attributes: ['id', 'nome', 'email']
              }));

            case 3:
              users = _context2.sent;
              return _context2.abrupt("return", res.json(users));

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.json(null));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
    /* Show */

  }, {
    key: "show",
    value: function show(req, res) {
      var user;
      return regeneratorRuntime.async(function show$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_User["default"].findByPk(req.params.id, {
                attributes: ['id', 'nome', 'email']
              }));

            case 3:
              user = _context3.sent;
              return _context3.abrupt("return", res.json(user));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.json(null));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
    /* Update */

  }, {
    key: "update",
    value: function update(req, res) {
      var user;
      return regeneratorRuntime.async(function update$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return regeneratorRuntime.awrap(_User["default"].findByPk(req.userId));

            case 3:
              user = _context4.sent;

              if (user) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return", res.status(400).json({
                errors: ['Usuário não existe']
              }));

            case 6:
              _context4.next = 8;
              return regeneratorRuntime.awrap(_User["default"].update(req.body, {
                where: {
                  id: req.userId
                }
              }));

            case 8:
              _context4.t0 = res;
              _context4.next = 11;
              return regeneratorRuntime.awrap(_User["default"].findByPk(req.userId, {
                attributes: ['id', 'nome', 'email']
              }));

            case 11:
              _context4.t1 = _context4.sent;
              return _context4.abrupt("return", _context4.t0.json.call(_context4.t0, _context4.t1));

            case 15:
              _context4.prev = 15;
              _context4.t2 = _context4["catch"](0);
              return _context4.abrupt("return", res.json({
                errors: _context4.t2.errors.map(function (err) {
                  return err.message;
                })
              }));

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 15]]);
    }
    /* Delete */

  }, {
    key: "delete",
    value: function _delete(req, res) {
      var user;
      return regeneratorRuntime.async(function _delete$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return regeneratorRuntime.awrap(_User["default"].findByPk(req.userId));

            case 3:
              user = _context5.sent;

              if (user) {
                _context5.next = 6;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                errors: ['Usuário inválido']
              }));

            case 6:
              _context5.next = 8;
              return regeneratorRuntime.awrap(_User["default"].destroy({
                where: {
                  id: req.userId
                }
              }));

            case 8:
              return _context5.abrupt("return", res.json("Usu\xE1rio com e-mail /".concat(user.email, "/ foi apagado")));

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.json({
                errors: _context5.t0.errors.map(function (err) {
                  return err.message;
                })
              }));

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 11]]);
    }
  }]);

  return UserController;
}();

var _default = new UserController();

exports["default"] = _default;