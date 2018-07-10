let express = require('express');
let router = express.Router();
let contestantsController = require('../public/controllers/contestantsController');
let usersController = require('../public/controllers/usersController');

router.post('/addContestant', usersController.authMiddleware, contestantsController.addContestants);

module.exports = router;
