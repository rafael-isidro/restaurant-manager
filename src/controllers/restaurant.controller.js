const { getRestaurantsService, getRestaurantByIdService, postRestaurantService } = require('../services');

const getRestaurantsController = async (req, res) => {
  const restaurantsList = await getRestaurantsService();
  return res.status(200).json(restaurantsList);
};

const getRestaurantByIdController = async (req, res) => {
  const { id } = req.params;
  const restaurant = await getRestaurantByIdService(id);
  return res.status(200).json(restaurant);
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
  getRestaurantsController,
  postRestaurantController,
  getRestaurantByIdController,
};
