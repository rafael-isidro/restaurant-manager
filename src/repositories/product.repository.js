const knex = require('../config/DB_conn');

const getProductByIdRepository = async (productId) => {
  const product = await knex('products').where({ id: productId });

  return product;
};
const getProductsRepository = async (id) => {
  const product = await knex('products').where({ restaurant_id: id });

  return product;
};

module.exports = {
  getProductByIdRepository,
  getProductsRepository,
};
