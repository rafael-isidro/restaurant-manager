const {
  getRestaurantsController,
  getRestaurantByIdController,
  postRestaurantController,
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
restaurantRoutes.get('/:id', verifyId, getRestaurantByIdController)
restaurantRoutes.post(
  '/',
  multer.single('picture'),
  validatePicture,
  validateRequestBody(restaurantSchema),
  postRestaurantController
);

module.exports = restaurantRoutes;
