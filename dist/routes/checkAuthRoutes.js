import { Router } from 'express';
import CheckAuthController from '../controllers/CheckAuthController.js';
/* import loginRequired from '../middlewares/loginRequired'; */

var router = new Router();
router.get('/', CheckAuthController.check);
export default router;