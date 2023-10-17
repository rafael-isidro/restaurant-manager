const { Errors } = require('../errors');
const { createProductPictureData } = require('../utilities');
const {
  getProductByIdRepository,
  getProductsRepository,
  postProductRepository,
  updateProductRepository,
} = require('../repositories');

const getProductByIdService = async (productId) => {
  const productsList = await getProductByIdRepository(Number(productId));

  return productsList[0];
};
const getProductsService = async (id) => {
  const product = await getProductsRepository(Number(id));

  return product;
};

const postProductService = async (productData, id, archive) => {
  const picture = archive;
  if (!picture) throw new Errors('The picture field is required', 400);
  const data = await createProductPictureData(productData, picture);
  const registeredProduct = await postProductRepository(data, Number(id));

  return registeredProduct[0];
};

const updateProductService = async (productData, archive, productId) => {
  const picture = archive;
  const data = await createProductPictureData(productData, picture)
  const updatedProduct = await updateProductRepository(data, Number(productId));

  return updatedProduct[0];
}

module.exports = {
  getProductByIdService,
  getProductsService,
  postProductService,
  updateProductService,
};
