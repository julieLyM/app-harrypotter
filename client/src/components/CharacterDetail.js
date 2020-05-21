import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterByIdSrv } from '../service/data';

import {
  CharacterDetailContainer,
  CharacterDetailText,
  DetailTitle,
  CharacterDetailSub,
  BlocData,
} from './styles/charactersStyle';

const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacterByIdSrv(id);
      setCharacter(data);
    };
    fetchCharacter();
  }, [id]);

  const {
    name,
    patronus,
    role,
    species,
    house,
    wand,
    bloodStatus,
    school,
    alias,
    boggart,
  } = character;

  return (
    <CharacterDetailContainer>
      <BlocData>
        <DetailTitle>{name}</DetailTitle>
        <CharacterDetailSub>alias :</CharacterDetailSub>{' '}
        <CharacterDetailText>{alias}</CharacterDetailText>
        <br></br>
        <CharacterDetailSub>role :</CharacterDetailSub>{' '}
        <CharacterDetailText>{role}</CharacterDetailText>
        <br></br>
        <CharacterDetailSub>patronus :</CharacterDetailSub>{' '}
        <CharacterDetailText>{patronus}</CharacterDetailText>
        <br></br>
        <CharacterDetailSub>house :</CharacterDetailSub>{' '}
        <CharacterDetailText>{house}</CharacterDetailText>
        <br></br>
        <CharacterDetailSub>school :</CharacterDetailSub>{' '}
        <CharacterDetailText>{school}</CharacterDetailText>
        <br></br>
        <CharacterDetailSub>species :</CharacterDetailSub>{' '}
        <CharacterDetailText>{species}</CharacterDetailText>
        <br></br>
        <CharacterDetailSub>wand :</CharacterDetailSub>{' '}
        <CharacterDetailText>{wand}</CharacterDetailText>
        <br></br>
        <CharacterDetailSub>boggart :</CharacterDetailSub>{' '}
        <CharacterDetailText>{boggart}</CharacterDetailText>
        <br></br>
        <CharacterDetailSub>blood status :</CharacterDetailSub>{' '}
        <CharacterDetailText>{bloodStatus}</CharacterDetailText>
        <br></br>
      </BlocData>
    </CharacterDetailContainer>
  );
};

export default CharacterDetail;
