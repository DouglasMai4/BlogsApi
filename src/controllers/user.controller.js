const jwt = require('jsonwebtoken');

const { userService } = require('../services');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await userService.create(displayName, email, password, image);

  if (!newUser) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = jwt.sign({ data: email }, JWT_SECRET, jwtConfig);

  return res.status(201).json({ token });
};

module.exports = {
  create,
};
