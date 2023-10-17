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
  postProductService,
} = require('./product.service');

module.exports = {
  getRestaurantsService,
  getRestaurantByIdService,
  postRestaurantService,
  updateRestaurantService,
  deleteRestaurantService,
  getProductByIdService,
  getProductsService,
  postProductService,
};
