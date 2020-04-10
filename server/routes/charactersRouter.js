const router = require('express').Router();
const characterController = require('../controllers/characterCtrl');

router.get('/', characterController.getListCharacters);
router.get('/:id', characterController.characterById);

module.exports = router;
