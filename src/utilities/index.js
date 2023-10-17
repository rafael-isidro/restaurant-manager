const { sendPicture } = require('./backblaze');
const {
  createRestaurantPictureData,
  createProductPictureData,
} = require('./createPictureData');

module.exports = {
  sendPicture,
  createRestaurantPictureData,
  createProductPictureData,
};
