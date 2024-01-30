const jwt = require('jsonwebtoken');
const { getById } = require('./user');

const { userService } = require('../services');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userService.login(email, password);

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: userPassword, ...userPayload } = user;
    const token = jwt.sign({ payload: userPayload }, JWT_SECRET, { expiresIn: '1h' });

    console.log(token);

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error' });
  }
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

const getAll = async (_req, res) => {
  const users = await userService.getAll();

  res.status(200).json(users);
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};
