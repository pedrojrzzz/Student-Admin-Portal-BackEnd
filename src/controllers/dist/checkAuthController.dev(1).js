"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CheckAuthController =
/*#__PURE__*/
function () {
  function CheckAuthController() {
    _classCallCheck(this, CheckAuthController);
  }

  _createClass(CheckAuthController, [{
    key: "check",
    value: function check(req, res) {
      var token;
      return regeneratorRuntime.async(function check$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = req.cookies.token;

              if (token) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", res.status(401).json({
                errors: ['Usuário não autenticado1'],
                isAuthenticated: false
              }));

            case 3:
              _jsonwebtoken["default"].sign(token, process.env.TOKEN_SECRET, function (err, decoded) {
                if (err) {
                  return res.status(401).json({
                    errors: ['Usuário não encontrado2'],
                    isAuthenticated: false
                  });
                }

                return res.status(200).json({
                  isAuthenticated: true,
                  decoded: decoded
                });
              });

              return _context.abrupt("return", res.status(401).json({
                errors: ['Usuário não autenticado3'],
                isAuthenticated: false
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return CheckAuthController;
}();

var _default = new CheckAuthController();

exports["default"] = _default;