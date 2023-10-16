const knex = require('../config/DB_conn');

const getRestaurantsRepository = async () => {
  const restaurantsList = await knex('restaurants');
  return restaurantsList;
};

const getRestaurantByIdRepository = async (id) => {
  const restaurant = await knex('restaurants').where({ id });
  return restaurant;
};

const postRestaurantRepository = async (restaurantData) => {
  const registeredRestaurant = await knex('restaurants')
    .insert(restaurantData)
    .returning('*');
  return registeredRestaurant[0];
};

module.exports = {
  getRestaurantsRepository,
  getRestaurantByIdRepository,
  postRestaurantRepository,
};
