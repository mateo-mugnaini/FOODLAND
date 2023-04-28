const {Router} = require('express');
const router = Router();
const {getAllUser,getUserId,putUser,putUserAdmin,postLogin,postUser} = require('../controllers/user');

router.route('/').get(getAllUser);
router.route('/:id').get(getUserId).put(putUserAdmin);
router.route('/profile/:id').put(putUser);
router.route('/signin').post(postLogin);
router.route('/signup').post(postUser);

module.exports = router;