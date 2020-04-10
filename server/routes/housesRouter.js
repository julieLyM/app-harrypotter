const router = require('express').Router();
const houseController = require('../controllers/houseCtrl');

router.get('/', houseController.getListHouses);

module.exports = router;
