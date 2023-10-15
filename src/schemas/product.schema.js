const joi = require('joi');

const productSchema = joi.object({
  product_picture: joi.string().required().max(255),
  product_name: joi.string().required().max(255),
  product_value: joi.number().positive().required(),
  product_category: joi.string().required().max(255),
  promo_description: joi.string().max(255),
  promo_value: joi.number().positive(),
  promo_period: joi.string().max(255),
});

module.exports = productSchema;