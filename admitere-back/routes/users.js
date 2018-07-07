let express = require('express');
let router = express.Router();
let usersController = require('../public/controllers/usersController');

router.post('/login', usersController.login);
router.get('/logout', usersController.logout);

module.exports = router;
