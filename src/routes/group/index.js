const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });
const { verifyToken } = require('../../middlewares/auth.middleware');

const groupController = require('../../controllers/group.controller');

router.get('/', verifyToken, groupController.getAll);
router.get('/:id', verifyToken, groupController.get);
router.post('/', parser, verifyToken, groupController.create);
router.put('/:id', parser, verifyToken, groupController.update);
router.delete('/:id', verifyToken, groupController.delete);

module.exports = router;
