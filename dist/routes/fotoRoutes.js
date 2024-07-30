import { Router } from 'express';
import FotoController from '../controllers/FotoController.js';
import loginRequired from '../middlewares/loginRequired.js';
var router = new Router();
router.post('/', loginRequired, FotoController.store);
export default router;