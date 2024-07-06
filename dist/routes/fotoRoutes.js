"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _FotoController = _interopRequireDefault(require("../controllers/FotoController"));
var _loginRequired = _interopRequireDefault(require("../middlewares/loginRequired"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = new _express.Router();
router.post('/', _loginRequired["default"], _FotoController["default"].store);
var _default = exports["default"] = router;