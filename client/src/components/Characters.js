import React, { useState, useEffect } from 'react';
import { getCharactersSrv } from '../service/data';
import { Link } from 'react-router-dom';
import { DesignLinkHouseDetail } from './styles/housesStyle';

import {
  CharactersContainer,
  CharactersTitle,
  CharactersBloc,
  ButtonBloc,
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

  return (
    <CharactersContainer>
      <CharactersBloc>
        <CharactersTitle>All characters</CharactersTitle>
        <Link to={`/characters/5a12292a0f5ae10021650d7e`}>
          <img
            src={`/image/harrypotter.png`}
            alt=""
            style={{ width: '100px', height: '100px' }}
          />
        </Link>
      </CharactersBloc>

      <div>
        {!isLoading ? (
          <div>
            <h3>is loading...</h3>
          </div>
        ) : (
          <div style={{ textAlign: 'center' }}>
            {characters.map((result, i) => (
              <div key={i}>
                <DesignLinkHouseDetail to={`/characters/${result._id}`}>
                  <p style={{ color: '#F0452B' }}>{result.name}</p>
                </DesignLinkHouseDetail>
              </div>
            ))}
          </div>
        )}
      </div>

      <ButtonBloc>
        <button onClick={changePage.bind(null, -1)}>before page</button>
        <button onClick={changePage.bind(null, 1)}>next page</button>
      </ButtonBloc>
    </CharactersContainer>
  );
};
