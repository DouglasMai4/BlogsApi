const userMiddleware = require('./user.middleware');
const loginMiddleware = require('./login.middleware');
const tokenMiddleware = require('./token.middleware');
const categoryMiddleware = require('./category.middleware');

module.exports = {
  userMiddleware,
  loginMiddleware,
  tokenMiddleware,
  categoryMiddleware,
};
