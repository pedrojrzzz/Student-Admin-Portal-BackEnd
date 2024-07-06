"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _UserController = _interopRequireDefault(require("../controllers/UserController"));
var _loginRequired = _interopRequireDefault(require("../middlewares/loginRequired"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = new _express.Router();
router.post('/', _UserController["default"].create);

// Não deveria existir em uma aplicação real, para ensinar CRUD
// Podemos apagar isso depois
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);
/** ********** */

router.put('/', _loginRequired["default"], _UserController["default"].update);
router["delete"]('/', _loginRequired["default"], _UserController["default"]["delete"]);
var _default = exports["default"] = router;