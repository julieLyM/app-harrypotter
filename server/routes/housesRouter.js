const router = require('express').Router();
const houseController = require('../controllers/houseCtrl');

router.get('/', houseController.getListHouses);
router.get('/:id', houseController.houseById);

module.exports = router;
