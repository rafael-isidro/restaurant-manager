const { Errors } = require('../errors');
const {
  getRestaurantsRepository,
  getRestaurantByIdRepository,
  postRestaurantRepository,
  updateRestaurantRepository,
} = require('../repositories');
const { sendPicture } = require('../utilities');

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

  const path = `${restaurantData.restaurant_name.replaceAll(' ', '_')}`;
  const registeredPicture = await sendPicture(
    path,
    picture.buffer,
    picture.mimetype
  );

  restaurantData.restaurant_picture = registeredPicture.url;

  const {
    restaurant_name,
    restaurant_adress,
    opening_hours,
    restaurant_picture,
  } = restaurantData;
  const registeredRestaurant = await postRestaurantRepository({
    restaurant_name,
    restaurant_adress,
    opening_hours,
    restaurant_picture,
  });

  return registeredRestaurant;
};

const updateRestaurantService = async (restaurantData, id, archive) => {
  if (archive) {
    let picture = archive;
    const path = `${restaurantData.restaurant_name.replaceAll(' ', '_')}`;
    const registeredPicture = await sendPicture(
      path,
      picture.buffer,
      picture.mimetype
    );

    restaurantData.restaurant_picture = registeredPicture.url;
  }
  const updatedRestaurant = await updateRestaurantRepository(
    restaurantData,
    id
  );

  return updatedRestaurant;
};

module.exports = {
  getRestaurantsService,
  getRestaurantByIdService,
  postRestaurantService,
  updateRestaurantService,
};
