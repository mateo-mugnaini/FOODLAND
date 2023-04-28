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
  const { name, email, isAdmin } = dataUpdate;
  return getUserIdDb(id)
  .then(user=>{
    if (user) {
    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.isAdmin = Boolean(isAdmin)??user.isAdmin;
  }
  return user.save();
  })
  .catch(error=>error);
};

const postLoginDb = (dataUser) => {
  const {email,password} = dataUser;
  return User.findOne({email:email})
  .then(user=>{
    if(!user || !bcrypt.compare(password,user.password)) throw {status:401,message:"Invalid email or password"};
    const token = generateToken(user);
    return {
      ...user['_doc'],
      token
    }
  })
};

const createUser = (data)=>{
  const {name,email,password} = data;
  if(!name || !email || !password) throw {status:404,message:"Faltan Datos"};
  const newUser = new User({
    name,email,password:bcrypt.hashSync(password)
  })
  return newUser.save()
  .then(user=>{
    token = generateToken(user);
    return {
      ...user['_doc'],
      token,
    }
  })
};

module.exports = {
  allUserDb,
  getUserIdDb,
  putUserDb,
  putAdminUser,
  postLoginDb,
  createUser
}