const {Router} = require('express');
const router = Router();
const {getAllUser,getUserId,putUser} = require('../controllers/user');

router.route('/').get(getAllUser);
router.route('/:id').get(getUserId).put(putUser);

module.exports = router;