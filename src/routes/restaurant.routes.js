const {
  getRestaurantsController,
  getRestaurantByIdController,
  postRestaurantController,
  updateRestaurantController,
} = require('../controllers');
const {
  validateRequestBody,
  validatePicture,
  multer,
  verifyId,
} = require('../middlewares');
const { restaurantSchema } = require('../schemas');

const restaurantRoutes = require('express').Router();

restaurantRoutes.get('/', getRestaurantsController);
restaurantRoutes.get('/:id', verifyId, getRestaurantByIdController);
restaurantRoutes.post(
  '/',
  multer.single('picture'),
  validatePicture,
  validateRequestBody(restaurantSchema),
  postRestaurantController
);
restaurantRoutes.put(
  '/:id',
  multer.single('picture'),
  verifyId,
  validateRequestBody(restaurantSchema),
  updateRestaurantController
);

module.exports = restaurantRoutes;
