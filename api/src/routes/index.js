const {Router} = require('express');
const router = Router();
const products = require('./products');
const seed = require('./seedRoutes');
const user = require('./user');

router.use('/products',products);
router.use('/seed',seed);
router.use('/user',user);


module.exports = router;