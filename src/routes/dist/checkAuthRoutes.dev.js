"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _CheckAuthController = _interopRequireDefault(require("../controllers/CheckAuthController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* import loginRequired from '../middlewares/loginRequired'; */
var router = new _express.Router();
router.get('/', _CheckAuthController["default"].check);
var _default = router;
exports["default"] = _default;