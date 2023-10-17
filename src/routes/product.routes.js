const {
  getProductByIdController,
  getProductsController,
  postProductController,
  updateProductController,
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
productRoutes.put(
  '/:id/product/:productId',
  multer.single('picture'),
  verifyId,
  validateRequestBody(productSchema),
  updateProductController
);

module.exports = productRoutes;
