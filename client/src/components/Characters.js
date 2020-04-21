import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharactersSrv } from '../service/data';

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
      <div>
        <h1>All characters</h1>
        <Link to={`/characters/5a12292a0f5ae10021650d7e`}>
          <img
            src={`/image/harrypotter.png`}
            alt=""
            style={{ width: '100px', height: '100px' }}
          />{' '}
        </Link>
        <div
          style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
        >
          {results.map((result, i) => (
            <div key={i}>
              <Link to={`/characters/${result._id}`}>{result.name}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
