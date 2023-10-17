const knex = require('../config/DB_conn');

const getProductByIdRepository = async (productId) => {
  const product = await knex('products').where({ id: productId });

  return product;
};
const getProductsRepository = async (id) => {
  const productsList = await knex('products').where({ restaurant_id: id });

  return productsList;
};

const postProductRepository = async (data, id) => {
  const registeredProduct = await knex('products')
    .insert({ ...data, restaurant_id: id })
    .returning('*');

  return registeredProduct;
};

module.exports = {
  getProductByIdRepository,
  getProductsRepository,
  postProductRepository,
};
