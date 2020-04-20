const axios = require('axios');
const { key } = require('./auth');
const URL = 'https://www.potterapi.com/v1/';

const getCharacters = async () => {
  const { data } = await axios.get(`${URL}characters/?key=${key}`);
  return data;
};

const getCharacterById = async (id) => {
  const { data } = await axios.get(`${URL}characters/${id}/?key=${key}`);
  return data;
};

const getHouses = async () => {
  const { data } = await axios.get(`${URL}houses/?key=${key}`);
  return data;
};

const getHouseById = async (id) => {
  const { data } = await axios.get(`${URL}houses/${id}/?key=${key}`);
  return data;
};

const getSpells = async () => {
  const { data } = await axios.get(`${URL}spells/?key=${key}`);
  return data.slice(0, 20);
};

const getSpellId = async (id) => {
  const { data } = await axios.get(`${URL}spells/${id}/?key=${key}`);
  return data;
};

const getHat = async () => {
  const { data } = await axios.get(`${URL}sortingHat/?key=${key}`);
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
