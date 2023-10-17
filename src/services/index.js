const {
  getRestaurantsService,
  getRestaurantByIdService,
  postRestaurantService,
  updateRestaurantService,
  deleteRestaurantService,
} = require('./restaurant.service');

const {
  getProductByIdService,
  getProductsService,
} = require('./product.service');

module.exports = {
  getRestaurantsService,
  getRestaurantByIdService,
  postRestaurantService,
  updateRestaurantService,
  deleteRestaurantService,
  getProductByIdService,
  getProductsService,
};
