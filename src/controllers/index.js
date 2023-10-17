const {
  getRestaurantsController,
  getRestaurantByIdController,
  postRestaurantController,
  updateRestaurantController,
  deleteRestaurantController,
} = require('./restaurant.controller');
const {
  getProductByIdController,
  getProductsController,
  postProductController,
} = require('./product.controller');

module.exports = {
  getRestaurantByIdController,
  getRestaurantsController,
  postRestaurantController,
  updateRestaurantController,
  deleteRestaurantController,
  getProductByIdController,
  getProductsController,
  postProductController,
};
