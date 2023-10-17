const { sendPicture } = require('./backblaze');

const createRestaurantPictureData = async (restaurantData, picture) => {
  const path = `restaurant_${restaurantData.restaurant_name
    .replaceAll(' ', '_')
    .toLowerCase()}`;
  const registeredPicture = await sendPicture(
    path,
    picture.buffer,
    picture.mimetype
  );

  restaurantData.restaurant_picture = registeredPicture.url;

  return restaurantData;
};

const createProductPictureData = async (productData, picture) => {
  const path = `product_${productData.product_name
    .replaceAll(' ', '_')
    .toLowerCase()}`;
  const registeredPicture = await sendPicture(
    path,
    picture.buffer,
    picture.mimetype
  );

  productData.product_picture = registeredPicture.url;

  return productData;
};

module.exports = { createRestaurantPictureData, createProductPictureData };
