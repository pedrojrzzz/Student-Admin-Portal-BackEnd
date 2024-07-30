"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Alunos = _interopRequireDefault(require("../models/Alunos"));

var _Fotos = _interopRequireDefault(require("../models/Fotos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AlunoController =
/*#__PURE__*/
function () {
  function AlunoController() {
    _classCallCheck(this, AlunoController);
  }

  _createClass(AlunoController, [{
    key: "index",
    value: function index(req, res) {
      var alunos;
      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(_Alunos["default"].findAll({
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
                order: [['id', 'DESC'], [_Fotos["default"], 'id', 'DESC']],
                // Toda vez que um novo aluno for criado, ele vai pro topo da lista
                include: {
                  model: _Fotos["default"],
                  attributes: ['url', 'filename']
                }
              }));

            case 3:
              alunos = _context.sent;
              return _context.abrupt("return", res.json(alunos));

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", res.status(400).json({
                errors: [_context.t0.name]
              }));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "show",
    value: function show(req, res) {
      var id, aluno;
      return regeneratorRuntime.async(function show$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              id = req.params.id;

              if (id) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                errors: ['Faltando ID']
              }));

            case 4:
              _context2.next = 6;
              return regeneratorRuntime.awrap(_Alunos["default"].findByPk(id, {
                attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
                order: [['id', 'DESC'], [_Fotos["default"], 'id', 'DESC']],
                include: {
                  model: _Fotos["default"],
                  attributes: ['url', 'filename']
                }
              }));

            case 6:
              aluno = _context2.sent;

              if (aluno) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(400).json({
                errors: ['Aluno não existe']
              }));

            case 9:
              return _context2.abrupt("return", res.json(aluno));

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              return _context2.abrupt("return", res.status(400).json({
                errors: [_context2.t0.name]
              }));

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 12]]);
    }
  }, {
    key: "create",
    value: function create(req, res) {
      var novoAluno;
      return regeneratorRuntime.async(function create$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(_Alunos["default"].create(req.body));

            case 3:
              novoAluno = _context3.sent;
              return _context3.abrupt("return", res.json(novoAluno));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              return _context3.abrupt("return", res.status(400).json({
                errors: _context3.t0.errors.map(function (err) {
                  return err.message;
                })
              }));

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 7]]);
    }
  }, {
    key: "update",
    value: function update(req, res) {
      var id, aluno;
      return regeneratorRuntime.async(function update$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              id = req.params.id;

              if (!id) {
                res.status(400).json({
                  errors: ['ID Inváldio']
                });
              }

              _context4.next = 5;
              return regeneratorRuntime.awrap(_Alunos["default"].findByPk(id));

            case 5:
              aluno = _context4.sent;

              if (aluno) {
                _context4.next = 8;
                break;
              }

              return _context4.abrupt("return", res.status(400).json({
                errors: ['Aluno não existe']
              }));

            case 8:
              _context4.next = 10;
              return regeneratorRuntime.awrap(_Alunos["default"].update(req.body, {
                where: {
                  id: id
                }
              }));

            case 10:
              _context4.t0 = res;
              _context4.next = 13;
              return regeneratorRuntime.awrap(_Alunos["default"].findByPk(id));

            case 13:
              _context4.t1 = _context4.sent;
              return _context4.abrupt("return", _context4.t0.json.call(_context4.t0, _context4.t1));

            case 17:
              _context4.prev = 17;
              _context4.t2 = _context4["catch"](0);
              return _context4.abrupt("return", res.status(400).json({
                errors: _context4.t2.errors.map(function (err) {
                  return err.message;
                })
              }));

            case 20:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 17]]);
    }
  }, {
    key: "delete",
    value: function _delete(req, res) {
      var id, aluno;
      return regeneratorRuntime.async(function _delete$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              id = req.params.id;

              if (id) {
                _context5.next = 4;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                errors: ['ID Inválido']
              }));

            case 4:
              _context5.next = 6;
              return regeneratorRuntime.awrap(_Alunos["default"].findByPk(id));

            case 6:
              aluno = _context5.sent;

              if (aluno) {
                _context5.next = 9;
                break;
              }

              return _context5.abrupt("return", res.status(400).json({
                errors: ['Aluno não existe']
              }));

            case 9:
              _context5.next = 11;
              return regeneratorRuntime.awrap(_Alunos["default"].destroy({
                where: {
                  id: id
                }
              }));

            case 11:
              return _context5.abrupt("return", res.json('Usuário apagado com sucesso'));

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              return _context5.abrupt("return", res.status(400).json({
                errors: _context5.t0
              }));

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, [[0, 14]]);
    }
  }]);

  return AlunoController;
}();

var _default = new AlunoController();

exports["default"] = _default;