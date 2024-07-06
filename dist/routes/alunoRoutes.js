"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _AlunoController = _interopRequireDefault(require("../controllers/AlunoController"));
var _loginRequired = _interopRequireDefault(require("../middlewares/loginRequired"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = new _express.Router();
router.get('/', _AlunoController["default"].index);
router.get('/:id', _AlunoController["default"].show);
router.post('/', _loginRequired["default"], _AlunoController["default"].create);
router.put('/:id', _loginRequired["default"], _AlunoController["default"].update);
router["delete"]('/:id', _loginRequired["default"], _AlunoController["default"]["delete"]);
var _default = exports["default"] = router;