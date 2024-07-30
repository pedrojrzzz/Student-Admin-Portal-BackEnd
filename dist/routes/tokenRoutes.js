import { Router } from 'express';
import TokenController from '../controllers/TokenController.js';
var router = new Router();
router.post('/', TokenController.create);
export default router;