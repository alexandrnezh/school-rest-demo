const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });

const lessonController = require('../../controllers/lesson.controller');

router.get('/', lessonController.getAll);
router.get('/:id', lessonController.get);
router.post('/', parser, lessonController.create);
router.put('/:id', parser, lessonController.update);
router.delete('/:id', lessonController.delete);

module.exports = router;
