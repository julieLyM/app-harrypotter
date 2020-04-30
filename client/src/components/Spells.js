import React, { useState, useEffect } from 'react';

import { getSpellsSrv } from '../service/data';

import { DesignLinkHouseDetail } from './styles/housesStyle';
import {
  CharacterTitle,
  ButtonBloc,
  ImgLinkBtn,
  TextSimple,
  Loading,
  LoadingTitle,
  LoadingImg,
  CharactersContainer,
  BlocData,
  ContainerData,
} from './styles/charactersStyle';

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSpell = async () => {
      const data = await getSpellsSrv(page);
      setSpells(data);
      setIsLoading(true);
    };
    fetchSpell();
  }, [page]);

  const changePage = (pageNumber) => {
    setPage(page + pageNumber);
  };

  const notLoading = (
    <Loading>
      <LoadingTitle>loading...</LoadingTitle>
      <LoadingImg src={`/image/wait.gif`} alt="" />
    </Loading>
  );

  return (
    <CharactersContainer>
      <CharacterTitle>All Spells</CharacterTitle>
      <ContainerData>
        {!isLoading ? (
          notLoading
        ) : (
          <BlocData>
            {spells.map(({ spell, _id }, i) => (
              <div key={i}>
                <DesignLinkHouseDetail key={i} to={`/Spells/${_id}`}>
                  <TextSimple>{spell}</TextSimple>
                </DesignLinkHouseDetail>
              </div>
            ))}
            <ButtonBloc>
              <button onClick={changePage.bind(null, -1)}>
                <ImgLinkBtn src={`/image/left.svg`} alt="" />
              </button>
              <button onClick={changePage.bind(null, 1)}>
                <ImgLinkBtn src={`/image/right.svg`} alt="" />
              </button>
            </ButtonBloc>
          </BlocData>
        )}
      </ContainerData>
    </CharactersContainer>
  );
};

export default Spells;
