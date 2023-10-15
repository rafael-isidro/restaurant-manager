const knex = require('../config/DB_conn');

const getRestaurantRepository = async () => {
  const restaurantsList = await knex('restaurants');
  return restaurantsList;
};

const postRestaurantRepository = async (restaurantData) => {
  const registeredRestaurant = await knex('restaurants')
    .insert(restaurantData)
    .returning('*');
  return registeredRestaurant[0];
};

module.exports = {
  getRestaurantRepository,
  postRestaurantRepository,
};
