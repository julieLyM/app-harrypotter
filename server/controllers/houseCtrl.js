const dataStore = require('../store/dataStore');

const getListHouses = async (req, res) => {
  try {
    const houses = await dataStore.getHouses();
    res.json(houses);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { getListHouses };
