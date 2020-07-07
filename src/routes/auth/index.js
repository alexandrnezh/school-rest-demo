const router = require('express').Router();
const { generateToken } = require('../../middlewares/auth.middleware');

router.post('/login', generateToken);

module.exports = router;
