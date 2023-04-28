const {allUserDb, getUserIdDb, putUserDb} = require('../services/user');

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
  const aux = putUserDb(id,data)
  .then(user=>res.json(user))
  .catch(error=>next(error));
}

module.exports = {
  getAllUser,
  getUserId,
  putUser
}