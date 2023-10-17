const {
  getProductByIdRepository,
  getProductsRepository,
} = require('../repositories');

const getProductByIdService = async (productId) => {
  const product = await getProductByIdRepository(Number(productId));

  return product[0];
};
const getProductsService = async (id) => {
  const product = await getProductsRepository(Number(id));

  return product[0];
};

module.exports = {
  getProductByIdService,
  getProductsService,
};
