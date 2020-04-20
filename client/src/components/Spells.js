import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <div>
          {spells.map(({ spell, _id }, i) => (
            <div key={i}>
              <Link key={i} to={`/Spells/${_id}`}>
                <p>{spell}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
