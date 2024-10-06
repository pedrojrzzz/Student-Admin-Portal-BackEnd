const { Router } = require('express');
const UserController = require('../controllers/UserController');
const loginRequired = require('../middlewares/loginRequired');

const router = new Router();

router.post('/', UserController.create);

// Não deveria existir em uma aplicação real, para ensinar CRUD
// Podemos apagar isso depois
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);
/** ********** */

router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

module.exports = router;
