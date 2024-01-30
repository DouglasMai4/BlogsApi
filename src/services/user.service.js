const { User } = require('../models');

const create = async (displayName, email, password, image) => {
  const userVerify = await User.findOne({ where: { email } });

  if (userVerify) {
    return null;
  }

  const userCreated = await User.create({ displayName, email, password, image });

  return userCreated;
};

module.exports = {
  create,
};
