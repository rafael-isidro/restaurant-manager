const { getRestaurantService } = require('../services');

const getRestaurantController = async (req, res) => {
  const restaurantsList = await getRestaurantService();
  return res.status(200).json(restaurantsList);
};

module.exports = {
  getRestaurantController,
};
