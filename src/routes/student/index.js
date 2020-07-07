const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });
const { verifyToken } = require('../../middlewares/auth.middleware');

const studentController = require('../../controllers/student.controller');

router.get('/', verifyToken, studentController.getAll);
router.get('/:id', verifyToken, studentController.get);
router.post('/', parser, verifyToken, studentController.create);
router.put('/:id', parser, verifyToken, studentController.update);
router.delete('/:id', verifyToken, studentController.delete);

module.exports = router;
