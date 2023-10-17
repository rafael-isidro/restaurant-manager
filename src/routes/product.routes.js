const {
  getProductByIdController,
  getProductsController,
  postProductController,
} = require('../controllers');
const {
  verifyId,
  multer,
  validateRequestBody,
  validatePicture,
} = require('../middlewares');
const { productSchema } = require('../schemas');
const productRoutes = require('express').Router();

productRoutes.get('/:id/product/', verifyId, getProductsController);
productRoutes.get(
  '/:id/product/:productId',
  verifyId,
  getProductByIdController
);
productRoutes.post(
  '/:id/product/',
  multer.single('picture'),
  validatePicture,
  verifyId,
  validateRequestBody(productSchema),
  postProductController
);

module.exports = productRoutes;
