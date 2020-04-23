const characterStore = require('../store/dataStore');

const RESULTS_BY_PAGE = 15;

const getListCharacters = async (req, res) => {
  const page = Number(req.query.page);
  const startIndex = (page - 1) * RESULTS_BY_PAGE;
  const endIndex = startIndex + RESULTS_BY_PAGE;
  try {
    const characters = await characterStore.getCharacters();
    const results = characters.slice(startIndex, endIndex);
    res.json(results);
  } catch (e) {
    console.error(e);
  }
};

const characterById = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const characters = await characterStore.getCharacterById(id);
    res.json(characters);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getListCharacters,
  characterById,
};
