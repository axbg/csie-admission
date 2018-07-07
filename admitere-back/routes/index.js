let express = require('express');
let router = express.Router();
let Contestant = require('./contestant');
let User = require('./users');
let model = require('../public/models');

router.get('/', function (req, res, next) {
  res.send('index');
});

router.get('/db', (req, res) => {
  model.sequelize.sync({force: true})
  .then(() => res.status(200).send({message: 'Created Tables'}))
  .catch((err) => res.status(500).send(err.message))
});

router.use('/user', User);

router.use('/contestant', Contestant);

module.exports = router;
