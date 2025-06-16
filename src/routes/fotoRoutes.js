const { Router } = require('express');

const FotoController = require('../controllers/FotoController.js');
const loginRequired = require('../middlewares/loginRequired.js')

const router = new Router();

router.post('/:id', loginRequired, FotoController.store);
router.put('/:id', loginRequired, FotoController.update);

module.exports = router;
