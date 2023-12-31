const { Errors } = require('../errors');
const {
  getRestaurantByIdRepository,
  getProductByIdRepository,
} = require('../repositories');

const verifyId = async (req, res, next) => {
  const { id, productId } = req.params;
  const basePath = req.baseUrl + req.route.path;
  let restaurantFound;
  if (isNaN(id) || Number(id) === 0) {
    throw new Errors('Restaurant id inserted in the parameter is invalid', 400);
  }

  if (
    productId !== undefined &&
    (isNaN(productId) || Number(productId) === 0)
  ) {
    throw new Errors('Product id inserted in the parameter is invalid', 400);
  }

  if (
    basePath === '/restaurant/:id/product/:productId' ||
    basePath === '/restaurant/:id'
  ) {
    restaurantFound = await getRestaurantByIdRepository(Number(id));
    if (!restaurantFound || restaurantFound.length < 1) {
      throw new Errors('Restaurant not found', 404);
    }
  }

  if (basePath === '/restaurant/:id/product/:productId') {
    const productFound = await getProductByIdRepository(Number(productId));
    if (!productFound || productFound.length < 1) {
      throw new Errors('Product not found', 404);
    }
    if (productFound[0].restaurant_id !== restaurantFound[0].id) {
      throw new Errors('Product not found for the specified restaurant by the parameter id', 404);
    }
  }

  next();
};

module.exports = verifyId;
