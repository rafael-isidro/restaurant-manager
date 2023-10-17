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
  postProductRepository,
} = require('./product.repository');

module.exports = {
  getRestaurantsRepository,
  getRestaurantByIdRepository,
  postRestaurantRepository,
  updateRestaurantRepository,
  deleteRestaurantRepository,
  getProductByIdRepository,
  getProductsRepository,
  postProductRepository,
};
