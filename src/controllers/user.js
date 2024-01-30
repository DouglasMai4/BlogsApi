const { userService } = require('../services');

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  getById,
};
