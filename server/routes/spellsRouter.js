const router = require('express').Router();
const spellController = require('../controllers/spellCtrl');

router.get('/', spellController.getListSpells);

module.exports = router;
