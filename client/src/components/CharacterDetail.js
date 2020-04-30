import React, { Component } from 'react';

import { getCharacterByIdSrv } from '../service/data';

import {
  CharacterDetailContainer,
  CharacterDetailText,
  DetailTitle,
  CharacterDetailSub,
  BlocData,
} from './styles/charactersStyle';

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
        boggart,
      },
    } = this.state;
    return (
      <CharacterDetailContainer>
        <BlocData>
          <DetailTitle>{name}</DetailTitle>
          <CharacterDetailSub>alias :</CharacterDetailSub>{' '}
          <CharacterDetailText>{alias}</CharacterDetailText>
          <br></br>
          <CharacterDetailSub>role :</CharacterDetailSub>{' '}
          <CharacterDetailText>{role}</CharacterDetailText>
          <br></br>
          <CharacterDetailSub>patronus :</CharacterDetailSub>{' '}
          <CharacterDetailText>{patronus}</CharacterDetailText>
          <br></br>
          <CharacterDetailSub>house :</CharacterDetailSub>{' '}
          <CharacterDetailText>{house}</CharacterDetailText>
          <br></br>
          <CharacterDetailSub>school :</CharacterDetailSub>{' '}
          <CharacterDetailText>{school}</CharacterDetailText>
          <br></br>
          <CharacterDetailSub>species :</CharacterDetailSub>{' '}
          <CharacterDetailText>{species}</CharacterDetailText>
          <br></br>
          <CharacterDetailSub>wand :</CharacterDetailSub>{' '}
          <CharacterDetailText>{wand}</CharacterDetailText>
          <br></br>
          <CharacterDetailSub>boggart :</CharacterDetailSub>{' '}
          <CharacterDetailText>{boggart}</CharacterDetailText>
          <br></br>
          <CharacterDetailSub>blood status :</CharacterDetailSub>{' '}
          <CharacterDetailText>{bloodStatus}</CharacterDetailText>
          <br></br>
        </BlocData>
      </CharacterDetailContainer>
    );
  }
}
