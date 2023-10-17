const {
  getProductByIdService,
  getProductsService,
  postProductService,
} = require('../services');

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

const postProductController = async (req, res) => {
  const { id } = req.params;
  const productData = req.body;
  const registeredProduct = await postProductService(productData, id, req.file);

  return res.status(201).json(registeredProduct);
};

module.exports = {
  getProductByIdController,
  getProductsController,
  postProductController,
};
