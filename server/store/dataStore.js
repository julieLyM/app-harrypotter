const axios = require('axios');
const API_KEY = require('./auth');

const URL = 'https://www.potterapi.com/v1/';

const getCharacters = async () => {
  const { data } = await axios.get(`${URL}characters?key=${API_KEY}`);
  return data;
};

const getCharacterById = async (id) => {
  const { data } = await axios.get(`${URL}characters/${id}?key=${API_KEY}`);
  return data;
};

const getHouses = async () => {
  const { data } = await axios.get(`${URL}houses?key=${API_KEY}/`);
  return data;
};

const getHouseById = async (id) => {
  const { data } = await axios.get(`${URL}houses/${id}?key=${API_KEY}`);
  return data;
};

const getSpells = async () => {
  const { data } = await axios.get(`${URL}spells?key=${API_KEY}`);
  return data;
};

const getSpellId = async (id) => {
  const { data } = await axios.get(`${URL}spells/${id}?key=${API_KEY}`);
  return data;
};

const getHat = async () => {
  const { data } = await axios.get(`${URL}sortingHat?key=${API_KEY}`);
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
