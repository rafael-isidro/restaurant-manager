const { Errors } = require('../errors');
const {
  getRestaurantRepository,
  postRestaurantRepository,
} = require('../repositories');
const { sendPicture } = require('../utilities');

const getRestaurantService = async () => {
  const restaurantsList = await getRestaurantRepository();

  return restaurantsList;
};

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
  getRestaurantService,
  postRestaurantService,
};
