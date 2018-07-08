let express = require('express');
let router = express.Router();
let contestantsController = require('../public/controllers/contestantsController');
let usersController = require('../public/controllers/usersController');

router.get('/', contestantsController.getContestants);
router.post('/addContestant', contestantsController.addContestants);
router.post('/deleteContestant', usersController.authMiddleware, contestantsController.deleteContestants);

module.exports = router;
