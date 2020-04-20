const dataStore = require('../store/dataStore');

const getListSpells = async (req, res) => {
  try {
    const spells = await dataStore.getSpells();
    res.json(spells);
  } catch (e) {
    console.error(e);
  }
};

const getSpellById = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const spells = await dataStore.getSpellId(id);
    res.json(spells);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getListSpells, getSpellById };
