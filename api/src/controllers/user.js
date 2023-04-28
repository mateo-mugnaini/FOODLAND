const {allUserDb, getUserIdDb, putUserDb,putAdminUser,postLoginDb,createUser} = require('../services/user');

const getAllUser = (req,res,next) =>{
  res.setHeader('carlos','esto es una prueba');
  allUserDb()
  .then(users=>res.json(users))
  .catch(error=>next(error));
};

const getUserId = (req,res,next) =>{
  const {id} = req.params;
  getUserIdDb(id)
  .then(user=>res.json(user))
  .catch(error=>next(error));
};

const putUser = (req,res,next) => {
  const {id} = req.params;
  const data = req.body;
  putUserDb(id,data)
  .then(user=>res.json(user))
  .catch(error=>next(error));
}
const putUserAdmin = (req,res,next) => {
  const {id} = req.params;
  const data = req.body;
  putAdminUser(id,data)
  .then(user=>res.json(user))
  .catch(error=>next(error));
}

const postLogin = (req,res,next)=>{
  const data = req.body;
  postLoginDb(data)
  .then(user=>res.json(user))
  .catch(error => next(error));
};

const postUser = async(req,res,next) => {
  const data = req.body
  try {
    const user = await createUser(data);
    res.status(201).json(user);
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getAllUser,
  getUserId,
  putUser,
  putUserAdmin,
  postLogin,
  postUser,
}