import React, { Component } from 'react';

import { getCharacterByIdSrv } from '../service/data';

export default class CharacterDetail extends Component {
  state = {
    character: [],
  };
  componentDidMount() {
    this.fetchCharacter();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchCharacter();
    }
  }

  fetchCharacter = async () => {
    const data = await getCharacterByIdSrv(this.props.match.params.id);
    this.setState({
      character: data,
    });
  };

  render() {
    const {
      character: {
        name,
        patronus,
        role,
        species,
        house,
        wand,
        bloodStatus,
        school,
        alias,
        animagus,
        boggart,
      },
    } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <p>{alias}</p>
        <p>{role}</p>
        <p>{animagus}</p>
        <p>{patronus}</p>
        <p>{house}</p>
        <p>{school}</p>
        <p>{species}</p>
        <p>{wand}</p>
        <p>{boggart}</p>
        <p>{bloodStatus}</p>
      </div>
    );
  }
}
