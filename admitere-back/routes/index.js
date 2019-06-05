const router = require('express').Router();
const Contestant = require('./contestant');
const User = require('./users');
const usersController = require('../controllers/usersController');

router.get('/test/login', usersController.authMiddleware, (req, res, next) => {
  res.status(200).send({ message: 'Logged in' });
});

router.use('/user', User);
router.use('/contestant', Contestant);

module.exports = router;
