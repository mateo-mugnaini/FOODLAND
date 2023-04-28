const {getProductsDb, productsDbSave, productUpdate,getProductId} = require('../services/products');

const getProducts = (req,res,next)=>{
  getProductsDb()
  .then(products=>res.json(products))
  .catch(error=>next(error))
};

const postProducts = async(req,res,next) => {
  const productBody = req.body;
  try {
    const product = await productsDbSave(productBody);
    res.json({message:"Product Created",product});
  } catch (error) {
    next(error);
  }
};

const putProduct = (req,res,next) => {
  const {id} = req.params;
  productUpdate(req.body,id)
  .then(product=>res.json({message:"Product Updated",data:product}))
  .catch(error=>next(error));
}

const getSlug = (req,res,next) => {
  const {id} = req.params;
  getProductId(id)
  .then(product=>{
    if(!product){
      return next({status:404,message:"No se encontro el item"})
    }
    return res.json(product)
  })
  .catch(error=>next(error))
}

module.exports = {
  getProducts,
  postProducts,
  putProduct,
  getSlug,
}