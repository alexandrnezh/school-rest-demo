const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });

const teacherController = require('../controllers/teacher.controller');

router.get('/', teacherController.getAll);
router.get('/:id', teacherController.get);
router.post('/', parser, teacherController.create);
router.put('/:id', parser, teacherController.update);
router.delete('/:id', teacherController.delete);

module.exports = router;
