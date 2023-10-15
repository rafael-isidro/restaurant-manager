const { getRestaurantRepository } = require('../repositories');

const getRestaurantService = async () => {
  const restaurantsList = await getRestaurantRepository();

  return restaurantsList;
};

module.exports = {
  getRestaurantService,
};
