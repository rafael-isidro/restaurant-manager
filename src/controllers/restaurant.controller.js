const { getRestaurantService, postRestaurantService } = require('../services');

const getRestaurantController = async (req, res) => {
  const restaurantsList = await getRestaurantService();
  return res.status(200).json(restaurantsList);
};

const postRestaurantController = async (req, res) => {
  const restaurantData = req.body;

  const registeredRestaurant = await postRestaurantService(
    restaurantData,
    req.file
  );
  return res.status(201).json(registeredRestaurant);
};

module.exports = {
  getRestaurantController,
  postRestaurantController,
};
