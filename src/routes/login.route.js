const { Router } = require('express');

const { userController } = require('../controllers');

const { loginMiddleware } = require('../middlewares');

const router = Router();

// POST
router.post('/', loginMiddleware.loginVerify, userController.login);

module.exports = router;
