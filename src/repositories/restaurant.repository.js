const knex = require('../config/DB_conn');

const getRestaurantsRepository = async () => {
  const restaurantsList = await knex('restaurants');
  return restaurantsList;
};

const getRestaurantByIdRepository = async (id) => {
  const restaurant = await knex('restaurants').where({ id });
  return restaurant;
};

const postRestaurantRepository = async (data) => {
  const registeredRestaurant = await knex('restaurants')
    .insert(data)
    .returning('*');
  return registeredRestaurant[0];
};

const updateRestaurantRepository = async (data, id) => {
  const updatedRestaurant = await knex('restaurants')
    .update(data)
    .where({ id })
    .returning('*');

  return updatedRestaurant[0];
};
module.exports = {
  getRestaurantsRepository,
  getRestaurantByIdRepository,
  postRestaurantRepository,
  updateRestaurantRepository,
};
