const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });

const classroomController = require('../../controllers/classroom.controller');

router.get('/', classroomController.getAll);
router.get('/:id', classroomController.get);
router.post('/', parser, classroomController.create);
router.put('/:id', parser, classroomController.update);
router.delete('/:id', classroomController.delete);

module.exports = router;
