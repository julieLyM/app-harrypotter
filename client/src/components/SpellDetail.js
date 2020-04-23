import React, { Component } from 'react';
import { getSpellsDetailSrv } from '../service/data';
import {
  CharacterDetailContainer,
  CharacterDetailText,
  CharacterDetailTitle,
  CharacterDetailSub,
  CharacterDetailBloc,
} from './styles/charactersStyle';

export default class Spells extends Component {
  state = {
    spell: [],
  };

  componentDidMount() {
    this.fetchSpell();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchSpell();
    }
  }
  
  fetchSpell = async () => {
    const data = await getSpellsDetailSrv(this.props.match.params.id);
    this.setState({
      spell: data,
    });
  };
  render() {
    const { spell } = this.state;
    console.log(this.state);
    return (
      <CharacterDetailContainer>
        <CharacterDetailTitle>Spell Detail</CharacterDetailTitle>
        <CharacterDetailBloc>
          {spell.map((element, i) => (
            <div key={i}>
              <CharacterDetailSub> Name of spell : </CharacterDetailSub>{' '}
              <CharacterDetailText> {element.spell}</CharacterDetailText>
              <CharacterDetailSub> Type of spell :</CharacterDetailSub>{' '}
              <CharacterDetailText> {element.type}</CharacterDetailText>
              <CharacterDetailSub> Effect :</CharacterDetailSub>{' '}
              <CharacterDetailText> {element.effect}</CharacterDetailText>
            </div>
          ))}
        </CharacterDetailBloc>
      </CharacterDetailContainer>
    );
  }
}
