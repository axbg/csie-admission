const router = require('express').Router();
const contestantsController = require('../controllers/contestantsController');
const usersController = require('../controllers/usersController');

router.post('/addContestant', usersController.authMiddleware, contestantsController.addContestants);

module.exports = router;
