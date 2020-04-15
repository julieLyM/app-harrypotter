import axios from 'axios';

export async function getCharactersSrv() {
  const { data } = await axios.get(`/api/v1/characters/`);
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

export async function getSpellsSrv() {
  const { data } = await axios.get(`/api/v1/spells/`);
  return data;
}

export async function getHatSrv() {
  const { data } = await axios.get(`/api/v1/hats/`);
  return data;
}

// function format(datas, films) {
//   return {
//     films: datas.slice(0, films.length),
//     starships: datas.slice(films.length),
//   };
// }

// export async function getPeopleDetail({ films, starships }) {
//   const filmsPromise = films.map((film) => axios.get(film));
//   const starshipsPromise = starships.map((starship) => axios.get(starship));
//   const datas = await Promise.all([...filmsPromise, ...starshipsPromise]);
//   return format(datas, films);
// }
