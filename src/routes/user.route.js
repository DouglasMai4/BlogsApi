const { Router } = require('express');

const { userController } = require('../controllers');

const { userMiddleware, tokenMiddleware } = require('../middlewares');

const router = Router();

// GET
router.get('/', tokenMiddleware, userController.getAll);

// POST
router.post('/', userMiddleware.userCreate, userController.create);

module.exports = router;
