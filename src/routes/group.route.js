const router = require('express').Router();
const parser = require('body-parser').urlencoded({ extended: true });

const groupController = require('../controllers/group.controller');

router.get('/', groupController.getAll);
router.get('/:id', groupController.get);
router.post('/', parser, groupController.create);
router.put('/:id', parser, groupController.update);
router.delete('/:id', groupController.delete);

module.exports = router;
