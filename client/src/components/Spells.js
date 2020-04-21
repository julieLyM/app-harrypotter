import React, { Component } from 'react';
import { DesignLinkHouseDetail } from './styles/housesStyle';

import { getSpellsSrv } from '../service/data';
import {

  CharacterDetailTitle,
} from './styles/charactersStyle';

export default class Spells extends Component {
  state = {
    spells: [],
  };

  componentDidMount() {
    this.fetchSpell();
  }

  fetchSpell = async () => {
    const data = await getSpellsSrv();
    this.setState({
      spells: data,
    });
  };
  render() {
    const { spells } = this.state;
    return (
      <div>
        <CharacterDetailTitle>All Spells</CharacterDetailTitle>
        <div>
          {spells.map(({ spell, _id }, i) => (
            <div key={i}>
              <DesignLinkHouseDetail key={i} to={`/Spells/${_id}`}>
                <ul>
                  <li>{spell}</li>
                </ul>
              </DesignLinkHouseDetail>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
