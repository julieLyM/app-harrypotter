import React, { useState, useEffect } from 'react';
import { getCharactersSrv } from '../service/data';
import { Link } from 'react-router-dom';
import { DesignLinkHouseDetail } from './styles/housesStyle';
import { ImgLinkBtn } from './styles/charactersStyle';

import {
  CharactersContainer,
  CharacterTitle,
  CharactersBloc,
  ButtonBloc,
  TextSimple,
  Loading,
  LoadingTitle,
  LoadingImg,
  ContainerData,
  BlocData,
} from './styles/charactersStyle';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharactersSrv(page);
      setCharacters(data);
      setIsLoading(true);
    };
    fetchCharacters();
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
      <CharactersBloc>
        <CharacterTitle>All characters</CharacterTitle>
        <Link to={`/characters/5a12292a0f5ae10021650d7e`}>
          <img src={`/image/harry.gif`} alt="" style={{ margin: '0',width:'100px' }} />
        </Link>
      </CharactersBloc>

      <ContainerData>
        {!isLoading ? (
          notLoading
        ) : (
          <BlocData>
            {characters.map((result, i) => (
              <div key={i}>
                <DesignLinkHouseDetail to={`/characters/${result._id}`}>
                  <TextSimple>{result.name}</TextSimple>
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
