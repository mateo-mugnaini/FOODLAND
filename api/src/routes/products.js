const {Router} = require('express');
const router = Router();
const {getProducts,postProducts,putProduct,getSlug} = require('../controllers/products')
const {getCategories} = require('../controllers/categories')

router.route("/").get(getProducts).post(postProducts);
router.route('/categories').get(getCategories);
router.route('/:id').put(putProduct);
router.route('/slug/:id').get(getSlug);

module.exports = router;