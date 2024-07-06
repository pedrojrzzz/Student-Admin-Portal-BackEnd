"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _TokenController = _interopRequireDefault(require("../controllers/TokenController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = new _express.Router();
router.post('/', _TokenController["default"].create);
var _default = exports["default"] = router;