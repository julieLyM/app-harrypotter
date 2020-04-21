import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharactersSrv } from '../service/data';
import {
  CharactersContainer,
  CharactersTitle,
  CharactersBloc,
} from './styles/charactersStyle';

import { DesignLinkHouseDetail } from './styles/housesStyle';
export default class Peoples extends Component {
  state = {
    results: [],
  };
  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    const data = await getCharactersSrv();
    this.setState({
      results: data,
    });
  };
  render() {
    const { results } = this.state;
    return (
      <CharactersContainer>
        <CharactersBloc>
          <CharactersTitle>All characters</CharactersTitle>
          <Link to={`/characters/5a12292a0f5ae10021650d7e`}>
            <img
              src={`/image/harrypotter.png`}
              alt=""
              style={{ width: '100px', height: '100px' }}
            />{' '}
          </Link>
        </CharactersBloc>

        <div
          style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
        >
          {results.map((result, i) => (
            <div key={i}>
              <ul>
                <li>
                  {' '}
                  <DesignLinkHouseDetail to={`/characters/${result._id}`}>
                    {result.name}
                  </DesignLinkHouseDetail>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </CharactersContainer>
    );
  }
}
