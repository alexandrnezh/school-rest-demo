const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });
const { verifyToken } = require('../../middlewares/auth.middleware');

const classroomController = require('../../controllers/classroom.controller');

router.get('/', verifyToken, classroomController.getAll);
router.get('/:id', verifyToken, classroomController.get);
router.post('/', parser, verifyToken, classroomController.create);
router.put('/:id', parser, verifyToken, classroomController.update);
router.delete('/:id', verifyToken, classroomController.delete);

module.exports = router;
