const { Category } = require('../models');

const getAll = async () => {
  const allCategories = await Category.findAll();

  return allCategories;
};

const create = async (name) => {
  const categoryCreated = await Category.create({ name });

  return categoryCreated;
};

module.exports = {
  getAll,
  create,
};
