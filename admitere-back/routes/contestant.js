let express = require('express');
let router = express.Router();
let contestantsController = require('../public/controllers/contestantsController');
let usersController = require('../public/controllers/usersController');

router.get('/', contestantsController.getContestants);
router.post('/addContestants', usersController.authMiddleware, contestantsController.addContestants);
router.post('/deleteContestants', usersController.authMiddleware, contestantsController.deleteContestants);

module.exports = router;
