const { Router } = require('express');

const { categoryController } = require('../controllers');

const { categoryMiddleware, tokenMiddleware } = require('../middlewares');

const router = Router();

// GET
router.get('/', tokenMiddleware, categoryController.getAll);

// POST
router.post('/', tokenMiddleware, categoryMiddleware.nameVerify, categoryController.create);

module.exports = router;
