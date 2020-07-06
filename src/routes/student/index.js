const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });

const studentController = require('../../controllers/student.controller');

router.get('/', studentController.getAll);
router.get('/:id', studentController.get);
router.post('/', parser, studentController.create);
router.put('/:id', parser, studentController.update);
router.delete('/:id', studentController.delete);

module.exports = router;
