import React, { Component } from 'react';

import { getCharacterByIdSrv } from '../service/data';

import {
  CharacterDetailContainer,
  CharacterDetailText,
  CharacterDetailTitle,
  CharacterDetailSub,
  CharacterDetailBloc,
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
        animagus,
        boggart,
      },
    } = this.state;
    return (
      <CharacterDetailContainer>
        <CharacterDetailTitle>{name}</CharacterDetailTitle>

        <CharacterDetailBloc>
          <CharacterDetailSub>alias :</CharacterDetailSub>
          <CharacterDetailText>{alias}</CharacterDetailText>

          <CharacterDetailSub>role :</CharacterDetailSub>
          <CharacterDetailText>{role}</CharacterDetailText>

          <CharacterDetailSub>animagus :</CharacterDetailSub>
          <CharacterDetailText>{animagus}</CharacterDetailText>

          <CharacterDetailSub>patronus :</CharacterDetailSub>
          <CharacterDetailText>{patronus}</CharacterDetailText>

          <CharacterDetailSub>house :</CharacterDetailSub>
          <CharacterDetailText>{house}</CharacterDetailText>

          <CharacterDetailSub>school :</CharacterDetailSub>
          <CharacterDetailText>{school}</CharacterDetailText>

          <CharacterDetailSub>species :</CharacterDetailSub>
          <CharacterDetailText>{species}</CharacterDetailText>

          <CharacterDetailSub>wand :</CharacterDetailSub>
          <CharacterDetailText>{wand}</CharacterDetailText>

          <CharacterDetailSub>boggart :</CharacterDetailSub>
          <CharacterDetailText>{boggart}</CharacterDetailText>

          <CharacterDetailSub>blood status :</CharacterDetailSub>
          <CharacterDetailText>{bloodStatus}</CharacterDetailText>
        </CharacterDetailBloc>
      </CharacterDetailContainer>
    );
  }
}
