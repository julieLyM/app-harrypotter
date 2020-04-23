const dataStore = require('../store/dataStore');

const RESULTS_BY_PAGE = 15;

const getListSpells = async (req, res) => {
  const page = Number(req.query.page);

  const startIndex = (page - 1) * RESULTS_BY_PAGE;
  const endIndex = startIndex + RESULTS_BY_PAGE;

  try {
    const spells = await dataStore.getSpells();
    const results = spells.slice(startIndex, endIndex);
    res.json(results);
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
