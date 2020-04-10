const dataStore = require('../store/dataStore');

const getListHats = async (req, res) => {
  try {
    const hats = await dataStore.getHat();
    res.json(hats);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getListHats };
