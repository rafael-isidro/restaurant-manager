const {
  getProductByIdController,
  getProductsController,
} = require('../controllers');
const { verifyId } = require('../middlewares');
const productRoutes = require('express').Router();

productRoutes.get('/:id/product/', verifyId, getProductsController);
productRoutes.get(
  '/:id/product/:productId',
  verifyId,
  getProductByIdController
);

module.exports = productRoutes;
