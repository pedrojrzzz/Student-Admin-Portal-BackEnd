import { Router } from 'express';
import UserController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';
var router = new Router();
router.post('/', UserController.create);

// Não deveria existir em uma aplicação real, para ensinar CRUD
// Podemos apagar isso depois
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);
/** ********** */

router.put('/', loginRequired, UserController.update);
router["delete"]('/', loginRequired, UserController["delete"]);
export default router;