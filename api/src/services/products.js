const Product = require('../models/product');

const getProductsDb = () => {
  const products = Product.find();
  return products;
};

const productsDbSave = (product) => {
  const {
    name,
    slug,
    image,
    price,
    category,
    brand,
    stock,
    rating,
    numReviews,
    description,
  } = product;
  const newProduct = new Product({
    name,
      slug,
      image:
        image ??
        "https://thumbs.dreamstime.com/z/concepto-creativo-de-la-comida-abstracta-con-la-col-y-el-pe-40423196.jpg",
      price,
      category,
      brand,
      stock,
      rating: rating ?? 0,
      numReviews: numReviews ?? 0,
      description,
  })
  return newProduct.save();
}

const productUpdate = (productApi,id) => {
  const {
    name,
    slug,
    price,
    image,
    images,
    category,
    brand,
    stock,
    description,
    rating,
    numReviews,
  } = productApi
  return Product.findById(id)
  .then(product=>{
    if (product) {
      product.name = name ?? product.name;
      product.slug = slug ?? product.slug;
      product.price = price ?? product.price;
      product.image = image ?? product.image;
      product.images = images ?? product.images;
      product.category = category ?? product.category;
      product.brand = brand ?? product.brand;
      product.stock = stock ?? product.stock;
      product.description = description ?? product.description;
      product.rating = rating ?? product.rating;
      product.numReviews = numReviews ?? product.numReviews;
      return product.save();
    }else{
      throw {status:404,message:"Product Not Found"}
    }
  }).catch(error=>error);
}

const getProductId = (id)=>{
  return Product.findById(id);
}

module.exports = {
  getProductsDb,
  productsDbSave,
  productUpdate,
  getProductId,
};