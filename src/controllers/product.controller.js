const { getProductByIdService, getProductsService } = require('../services');

const getProductByIdController = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductByIdService(productId);

  return res.status(200).json(product);
};

const getProductsController = async (req, res) => {
  const { id } = req.params;
  const productsList = await getProductsService(id);

  return res.status(200).json(productsList);
};
module.exports = {
  getProductByIdController,
  getProductsController,
};
