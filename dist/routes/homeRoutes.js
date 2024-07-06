"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _HomeController = _interopRequireDefault(require("../controllers/HomeController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = new _express.Router();
router.get('/', _HomeController["default"].index);
var _default = exports["default"] = router;