const { categoryService } = require('../services');

const getAll = async (req, res) => {
  const allCategories = await categoryService.getAll();

  return res.status(200).json(allCategories);
};

const create = async (req, res) => {
  const { name } = req.body;

  const createdCategory = await categoryService.create(name);

  return res.status(201).json(createdCategory);
};

module.exports = {
  getAll,
  create,
};
