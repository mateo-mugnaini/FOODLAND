const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../middlewares/middlewares');

const allUserDb = () => {
  return User.find();
};

const getUserIdDb = (id) => {
  return User.findById(id)
    .then(user => {
      if (!user) throw { status: 404, message: 'User Not Found' };
      return user
    }).catch(error => error);
};

const putUserDb = (id, dataUpdate) => {
  const { name, email, password } = dataUpdate;
  return getUserIdDb(id)
    .then(user => {
      if (password) {
        user.password = bcrypt.hashSync(password, 8);
      }
      user.name = name ?? user.name;
      user.email = email ?? user.email;
      return user.save();
    })
    .then(user => {
      const token = generateToken(user);
      const userNew = {
        ...user["_doc"],
        token
      };
      return userNew;
    })
    .catch(error => {
      console.error(error);
      return error;
    })
}

const putAdminUser = (id, dataUpdate) => {

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);
    user.save();
  }
};

module.exports = {
  allUserDb,
  getUserIdDb,
  putUserDb,
  putAdminUser
}