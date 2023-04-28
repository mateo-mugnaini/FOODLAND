const {getCategoriesDb} = require('../services/categories');

const getCategories = (req,res,next)=>{
  getCategoriesDb()
  .then(categories=>res.json(categories))
  .catch(error=>next(error));
};


module.exports = {getCategories,}