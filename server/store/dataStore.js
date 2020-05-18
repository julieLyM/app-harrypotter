const axios = require('axios');
const key = require('../AUTH');
const URL = 'https://www.potterapi.com/v1/';

const getCharacters = async () => {
  const { data } = await axios.get(`${URL}characters/`, {
    params: key,
  });
  return data;
};

const getCharacterById = async (id) => {
  const { data } = await axios.get(`${URL}characters/${id}/`, {
    params: key,
  });
  return data;
};

const getHouses = async () => {
  const { data } = await axios.get(`${URL}houses/`, {
    params: key,
  });
  return data;
};

const getHouseById = async (id) => {
  const { data } = await axios.get(`${URL}houses/${id}/`, {
    params: key,
  });
  return data;
};

const getSpells = async () => {
  const { data } = await axios.get(`${URL}spells/`, {
    params: key,
  });
  return data;
};

const getSpellId = async (id) => {
  const { data } = await axios.get(`${URL}spells/${id}/`, {
    params: key,
  });
  return data;
};

const getHat = async () => {
  const { data } = await axios.get(`${URL}sortingHat/`, {
    params: key,
  });
  return data;
};

module.exports = {
  getCharacters,
  getCharacterById,
  getHat,
  getHouses,
  getHouseById,
  getSpells,
  getSpellId,
};
