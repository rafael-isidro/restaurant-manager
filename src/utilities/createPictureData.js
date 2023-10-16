const { sendPicture } = require(".");

const createPictureData = async (restaurantData, picture) => {
    const path = `${restaurantData.restaurant_name.replaceAll(' ', '_')}`;
    const registeredPicture = await sendPicture(
      path,
      picture.buffer,
      picture.mimetype
    );
  
    restaurantData.restaurant_picture = registeredPicture.url;

    return restaurantData;
};

module.exports = createPictureData;