const dataStore = require('../store/dataStore');

const getListSpells = async (req, res) => {
  try {
    const spells = await dataStore.getSpells();
    res.json(spells);
  } catch (e) {
    console.error(e);
  }
};

module.exports ={getListSpells}