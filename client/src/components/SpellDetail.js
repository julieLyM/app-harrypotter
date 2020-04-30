import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getSpellsDetailSrv } from '../service/data';
import {
  CharacterDetailContainer,
  CharacterDetailText,
  DetailTitle,
  CharacterDetailSub,
  BlocData,
  SpellImg,
} from './styles/charactersStyle';

const SpellDetail = () => {
  const [spell, setSpell] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSpell = async () => {
      const data = await getSpellsDetailSrv(id);
      setSpell(data);
    };
    fetchSpell();
  }, [id]);
  
  return (
    <div style={{ display: 'flex' }}>
      <SpellImg src={`/image/wand.png`} alt="" />
      <CharacterDetailContainer>
        <BlocData>
          <DetailTitle>Spell Detail</DetailTitle>
          {spell.map((element, i) => (
            <div key={i}>
              <CharacterDetailSub> Name of spell : </CharacterDetailSub>{' '}
              <CharacterDetailText> {element.spell}</CharacterDetailText>
              <br></br>
              <CharacterDetailSub> Type of spell :</CharacterDetailSub>{' '}
              <CharacterDetailText> {element.type}</CharacterDetailText>
              <br></br>
              <CharacterDetailSub> Effect :</CharacterDetailSub>{' '}
              <CharacterDetailText> {element.effect}</CharacterDetailText>
            </div>
          ))}
        </BlocData>
      </CharacterDetailContainer>
    </div>
  );
};

export default SpellDetail;
