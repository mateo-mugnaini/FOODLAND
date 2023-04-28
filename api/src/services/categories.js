const Product = require('../models/product');

const getCategoriesDb = () => {
  return Product.find().distinct('category');
};

module.exports = {
  getCategoriesDb,
}