const { Router } = require('express');

const { userController } = require('../controllers');

const { userMiddleware } = require('../middlewares');

const router = Router();

// POST
router.post('/', userMiddleware.userCreate, userController.create);

module.exports = router;
