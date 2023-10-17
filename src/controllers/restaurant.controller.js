const {
  getRestaurantsService,
  getRestaurantByIdService,
  postRestaurantService,
  updateRestaurantService,
  deleteRestaurantService,
} = require('../services');

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

const updateRestaurantController = async (req, res) => {
  const restaurantData = req.body;

  const { id } = req.params;
  const updatedRestaurant = await updateRestaurantService(
    restaurantData,
    id,
    req.file
  );

  return res.status(200).json(updatedRestaurant);
};

const deleteRestaurantController = async (req, res) => {
  const { id } = req.params;

  const deletedRestaurant = await deleteRestaurantService(id);

  return res.status(200).json(deletedRestaurant);
};

module.exports = {
  getRestaurantsController,
  postRestaurantController,
  getRestaurantByIdController,
  updateRestaurantController,
  deleteRestaurantController,
};
