import React, { Component } from 'react';
import { DesignLinkHouseDetail } from './styles/housesStyle';

import { getSpellsSrv } from '../service/data';
import { CharacterDetailTitle, ButtonBloc } from './styles/charactersStyle';

export default class Spells extends Component {
  state = {
    spells: [],
    page: 1,
    isLoading: false,
  };

  componentDidMount() {
    this.fetchSpell();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchSpell();
    }
  }

  fetchSpell = async () => {
    const data = await getSpellsSrv(this.state.page);
    this.setState({
      spells: data,
      isLoading: true,
    });
  };

  changePage = (pageNumber) => {
    this.setState(({ page }) => ({ page: page + pageNumber }));
  };

  render() {
    const { spells, isLoading } = this.state;
    const notLoading = (
      <div>
        <h3>Loading spells...</h3>
      </div>
    );
    return (
      <div>
        <CharacterDetailTitle>All Spells</CharacterDetailTitle>

        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          {!isLoading ? (
            notLoading
          ) : (
            <div>
              {spells.map(({ spell, _id }, i) => (
                <div key={i}>
                  <DesignLinkHouseDetail key={i} to={`/Spells/${_id}`}>
                    <p style={{ color: '#FB7B1D' }}>{spell}</p>
                  </DesignLinkHouseDetail>
                </div>
              ))}
            </div>
          )}
        </div>
        <ButtonBloc>
          <button onClick={this.changePage.bind(null, -1)}>before page</button>
          <button onClick={this.changePage.bind(null, 1)}>next page</button>
        </ButtonBloc>
      </div>
    );
  }
}
