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
        <div
          style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}
        >
          {results.map((result, i) => (
            <div key={i}>
              <Link to={`/characters/${result._id}`} results={results}>
                {result.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
