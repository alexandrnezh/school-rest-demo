const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });
const { verifyToken } = require('../../middlewares/auth.middleware');

const teacherController = require('../../controllers/teacher.controller');

router.get('/', verifyToken, teacherController.getAll);
router.get('/:id', verifyToken, teacherController.get);
router.post('/', parser, verifyToken, teacherController.create);
router.put('/:id', parser, verifyToken, teacherController.update);
router.delete('/:id', verifyToken, teacherController.delete);

module.exports = router;
