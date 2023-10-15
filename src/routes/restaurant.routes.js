const {
  getRestaurantController,
  postRestaurantController,
} = require('../controllers');
const {
  validateRequestBody,
  validatePicture,
  multer,
} = require('../middlewares');
const { restaurantSchema } = require('../schemas');

const restaurantRoutes = require('express').Router();

restaurantRoutes.get('/', getRestaurantController);
restaurantRoutes.post(
  '/',
  multer.single('picture'),
  validatePicture,
  validateRequestBody(restaurantSchema),
  postRestaurantController
);

module.exports = restaurantRoutes;
