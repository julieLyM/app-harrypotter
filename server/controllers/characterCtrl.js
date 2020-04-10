const characterStore = require('../store/dataStore');

const getListCharacters = async (req, res) => {
  try {
    const characters = await characterStore.getCharacters();
    res.json(characters);
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
