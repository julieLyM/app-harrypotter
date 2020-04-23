import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharactersSrv } from '../service/data';
import {
  CharactersContainer,
  CharactersTitle,
  CharactersBloc,
  ButtonBloc,
} from './styles/charactersStyle';

import { DesignLinkHouseDetail } from './styles/housesStyle';
export default class Peoples extends Component {
  state = {
    results: [],
    page: 1,
    isLoading: false,
  };
  componentDidMount() {
    this.fetchCharacters();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchCharacters();
    }
  }

  fetchCharacters = async () => {
    const data = await getCharactersSrv(this.state.page);
    this.setState({
      results: data,
      isLoading: true,
    });
  };

  changePage = (pageNumber) => {
    this.setState(({ page }) => ({ page: page + pageNumber }));
  };

  render() {
    const { results, isLoading } = this.state;
    const notLoading = (
      <div>
        <h3>Loading Characters...</h3>
      </div>
    );
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

        <div style={{ margin: '0 auto' }}>
          {!isLoading ? (
            notLoading
          ) : (
            <div>
              {results.map((result, i) => (
                <div key={i}>
                  <ul>
                    <li>
                      <DesignLinkHouseDetail to={`/characters/${result._id}`}>
                        {result.name}
                      </DesignLinkHouseDetail>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <ButtonBloc>
          <button onClick={this.changePage.bind(null, -1)}>before page</button>
          <button onClick={this.changePage.bind(null, 1)}>next page</button>
        </ButtonBloc>
      </CharactersContainer>
    );
  }
}
