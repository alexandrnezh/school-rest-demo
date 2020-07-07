const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });
const { verifyToken } = require('../../middlewares/auth.middleware');

const lessonController = require('../../controllers/lesson.controller');

router.get('/', verifyToken, lessonController.getAll);
router.get('/:id', verifyToken, lessonController.get);
router.post('/', parser, verifyToken, lessonController.create);
router.put('/:id', parser, verifyToken, lessonController.update);
router.delete('/:id', verifyToken, lessonController.delete);

module.exports = router;
