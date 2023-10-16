const { Errors } = require('../errors');
const {
  getRestaurantsRepository,
  getRestaurantByIdRepository,
  postRestaurantRepository,
} = require('../repositories');
const { sendPicture } = require('../utilities');

const getRestaurantsService = async () => {
  const restaurantsList = await getRestaurantsRepository();

  return restaurantsList;
};

const getRestaurantByIdService = async (id) => {
  const restaurant = await getRestaurantByIdRepository(Number(id));
  return restaurant[0];
}

const postRestaurantService = async (restaurantData, archive) => {
  const picture = archive;
  if (!picture) throw new Errors('The picture field is required', 400);

  const path = `${restaurantData.restaurant_name.replace(' ', '_')}`;
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

module.exports = {
  getRestaurantsService,
  getRestaurantByIdService,
  postRestaurantService,
};
