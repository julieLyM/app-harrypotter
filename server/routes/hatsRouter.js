const router = require('express').Router();
const hatController = require('../controllers/hatsCtrl');

router.get('/', hatController.getListHats);

module.exports = router;
