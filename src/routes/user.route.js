const { Router } = require('express');

const { userController } = require('../controllers');

const { userMiddleware, tokenMiddleware } = require('../middlewares');

const router = Router();

// GET
router.get('/', tokenMiddleware, userController.getAll);
router.get('/:id', tokenMiddleware, userController.getById);

// POST
router.post('/', userMiddleware.userCreate, userController.create);

module.exports = router;
