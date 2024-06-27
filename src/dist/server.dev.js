"use strict";

var _app = _interopRequireDefault(require("./app"));

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var path = require('path');

require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

_app["default"].listen(3001, function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_database["default"].authenticate());

        case 3:
          console.log('Connection has been established successfully.');
          console.log("Servidor rodando na porta: ".concat(process.env.APP_PORT));
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error('Unable to connect to the database:', _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});