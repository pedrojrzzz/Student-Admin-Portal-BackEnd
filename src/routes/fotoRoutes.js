import { Router } from 'express';

import FotoController from '../controllers/FotoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, FotoController.store); // <arquivo> e o nome que definimos no insomnia

export default router;
