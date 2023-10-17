const { Errors } = require('../errors');
const { getRestaurantByIdRepository } = require('../repositories');

const verifyId = async (req, res, next) => {
  const { id } = req.params;
  const basePath = req.baseUrl + req.route.path;

  if (isNaN(id) || Number(id) === 0) {
    throw new Errors('Id entered in the parameter is invalid', 400);
  }

  if (basePath === '/restaurant/:id') {
    const restaurantFound = await getRestaurantByIdRepository(Number(id));
    if (restaurantFound.length < 1 || restaurantFound === undefined) {
      throw new Errors('Restaurant not found', 404);
    }
  }

  next();
};

module.exports = verifyId;
