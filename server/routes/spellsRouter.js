const router = require('express').Router();
const spellController = require('../controllers/spellCtrl');

router.get('/', spellController.getListSpells);
router.get('/:id', spellController.getSpellById);

module.exports = router;
