const knex = require('../config/DB_conn');

const getRestaurantRepository = async () => {
  const restaurantsList = await knex('restaurants');
  return restaurantsList;
};

module.exports = {
  getRestaurantRepository,
};
