const { Router } = require('express');

const FotoController = require('../controllers/FotoController.js');
const loginRequired = require('../middlewares/loginRequired.js')

const router = new Router();

router.post('/', loginRequired, FotoController.store);

module.exports = router;
