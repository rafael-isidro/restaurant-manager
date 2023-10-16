const { Errors } = require('../errors');
const { createPictureData } = require('../middlewares');
const {
  getRestaurantsRepository,
  getRestaurantByIdRepository,
  postRestaurantRepository,
  updateRestaurantRepository,
} = require('../repositories');

const getRestaurantsService = async () => {
  const restaurantsList = await getRestaurantsRepository();

  return restaurantsList;
};

const getRestaurantByIdService = async (id) => {
  const restaurant = await getRestaurantByIdRepository(Number(id));

  return restaurant[0];
};

const postRestaurantService = async (restaurantData, archive) => {
  const picture = archive;
  if (!picture) throw new Errors('The picture field is required', 400);
  const data = await createPictureData(restaurantData, picture);
  const registeredRestaurant = await postRestaurantRepository(data);

  return registeredRestaurant;
};

const updateRestaurantService = async (restaurantData, id, archive) => {
  if (archive) {
    const picture = archive;
    const data = await createPictureData(restaurantData, picture);
    const updatedRestaurant = await updateRestaurantRepository(data, id);

    return updatedRestaurant;
  }

  const updatedRestaurant = await updateRestaurantRepository(restaurantData, id);

  return updatedRestaurant;
};

module.exports = {
  getRestaurantsService,
  getRestaurantByIdService,
  postRestaurantService,
  updateRestaurantService,
};
