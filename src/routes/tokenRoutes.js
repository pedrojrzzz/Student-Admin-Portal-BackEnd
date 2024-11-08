const { Router } = require('express');
const TokenController = require('../controllers/TokenController.js');
const loginRequired = require('../middlewares/loginRequired.js');

const router = new Router();

router.post('/', TokenController.create);
router.get('/checkAuth', loginRequired, TokenController.userIsAuthorized) // Rota para validar tokens

module.exports = router;
