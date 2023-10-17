const {
  getRestaurantsRepository,
  getRestaurantByIdRepository,
  postRestaurantRepository,
  updateRestaurantRepository,
  deleteRestaurantRepository,
} = require('./restaurant.repository');
const {
  getProductByIdRepository,
  getProductsRepository,
} = require('./product.repository');

module.exports = {
  getRestaurantsRepository,
  getRestaurantByIdRepository,
  postRestaurantRepository,
  updateRestaurantRepository,
  deleteRestaurantRepository,
  getProductByIdRepository,
  getProductsRepository,
};
