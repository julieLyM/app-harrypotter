import axios from 'axios';

export async function getCharactersSrv(page) {
  const { data } = await axios.get(`/api/v1/characters/`, {
    params: { page },
  });
  console.log('service', data);
  return data;
}

export async function getCharacterByIdSrv(id) {
  const { data } = await axios.get(`/api/v1/characters/${id}`);
  return data;
}

export async function getHousesSrv() {
  const { data } = await axios.get(`/api/v1/houses/`);
  return data;
}

export async function getHouseById(id) {
  const { data } = await axios.get(`/api/v1/houses/${id}`);
  return data;
}

export async function getSpellsSrv(page) {
  const { data } = await axios.get(`/api/v1/spells/`, {
    params: { page },
  });
  return data;
}

export async function getSpellsDetailSrv(id) {
  const { data } = await axios.get(`/api/v1/spells/${id}`);
  return data;
}

export async function getHatSrv() {
  const { data } = await axios.get(`/api/v1/hats/`);
  return data;
}
