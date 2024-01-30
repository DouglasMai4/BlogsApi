const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({
    where: {
      email,
      password,
    },
    attributes: { exclude: ['displayName', 'image'] },
  });

  if (!user || user.password !== password) {
    return null;
  }

  return user;
};

const create = async (displayName, email, password, image) => {
  const userVerify = await User.findOne({ where: { email } });

  if (userVerify) {
    return null;
  }

  const userCreated = await User.create({ displayName, email, password, image });

  return userCreated;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  return user || null;
};

module.exports = {
  login,
  create,
  getAll,
  getById,
};
