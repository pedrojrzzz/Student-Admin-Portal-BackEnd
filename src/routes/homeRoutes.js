const express = require('express')
const HomeController = require('../controllers/HomeController.js')
const loginRequired = require('../middlewares/loginRequired.js')

const router = new express.Router();

router.get('/', HomeController.index);
router.get('/teste', loginRequired);

module.exports = router;
