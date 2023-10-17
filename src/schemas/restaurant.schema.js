const joi = require('joi');

const restaurantSchema = joi.object({
  restaurant_name: joi.string().required().max(255),
  restaurant_adress: joi.string().required().max(255),
  opening_hours: joi.string().required().max(255),
});

module.exports = restaurantSchema;
