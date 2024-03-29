const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token.split(' ')[1], JWT_SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validation;
