let Users = require('../models').Users;

module.exports.login = (req, res) => {
  Users.findOne({
    where:{
      username: req.body.username,
      password: req.body.password
    }
  }).then((result) => {
    if(result){
      req.session.auth = true;
      res.status(200).send('Logged in');
    } else {
      res.status(403).send('Forbidden');
    }
  }).catch((err) => {
    res.status(403).send('Forbidden');
  })
};

module.exports.logout = (req, res) => {
  req.session.auth = false;
  res.status(200).send({message:"Logged out"});
};

module.exports.authMiddleware = (req, res, next) => {
  if(req.session.auth){
    next();
  } else {
    res.status(403).send({message:'Forbidden'});
  }
};