import { Router } from 'express';
import homeController from '../controllers/HomeController.js';
import loginRequired from '../middlewares/loginRequired.js';
var router = new Router();
router.get('/', homeController.index);
router.get('/teste', loginRequired);
export default router;