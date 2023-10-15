const { getRestaurantController } = require('../controllers');

const restaurantRoutes = require('express').Router();

restaurantRoutes.get('/', getRestaurantController);

module.exports = restaurantRoutes;
