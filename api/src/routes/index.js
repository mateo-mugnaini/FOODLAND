const {Router} = require('express');
const router = Router();
const products = require('./products');
const seed = require('./seedRoutes');

router.use('/products',products);
router.use('/seed',seed);


module.exports = router;