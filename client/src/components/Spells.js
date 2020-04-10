import React, { Component } from 'react';
import { getSpellsSrv } from '../service/data';

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
        <h1>All Spells</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
          {spells.map(({ spell, type, effect }, i) => (
            <div
              key={i}
              style={{ border: '1px solid blue', flex: '1 1 250px' }}
            >
              <p> name of spell : {spell}</p>
              <p> type : {type}</p>
              <p> effect: {effect}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
