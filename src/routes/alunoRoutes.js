const { Router } = require('express')
const AlunoController = require('../controllers/AlunoController.js')

const loginRequired = require('../middlewares/loginRequired.js');

const router = new Router();

router.get('/', AlunoController.index);
router.get('/:id',AlunoController.show);
router.post('/', loginRequired, AlunoController.create);
router.put('/:id', loginRequired, AlunoController.update);
router.delete('/:id', loginRequired, AlunoController.delete);

module.exports = router;
