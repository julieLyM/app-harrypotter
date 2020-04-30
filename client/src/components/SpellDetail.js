import React, { Component } from 'react';
import { getSpellsDetailSrv } from '../service/data';
import {
  CharacterDetailContainer,
  CharacterDetailText,
  DetailTitle,
  CharacterDetailSub,
  CharacterDetailBloc,
  LoadingImg,
  BlocData,
  SpellImg
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
      <div style={{ display: 'flex' }}>
        <SpellImg
          src={`/image/wand.png`}
          alt=""
        />
        <CharacterDetailContainer>
          <BlocData>
            <DetailTitle>Spell Detail</DetailTitle>
            {spell.map((element, i) => (
              <div key={i}>
                <CharacterDetailSub> Name of spell : </CharacterDetailSub>{' '}
                <CharacterDetailText> {element.spell}</CharacterDetailText>
                <br></br>
                <CharacterDetailSub> Type of spell :</CharacterDetailSub>{' '}
                <CharacterDetailText> {element.type}</CharacterDetailText>
                <br></br>
                <CharacterDetailSub> Effect :</CharacterDetailSub>{' '}
                <CharacterDetailText> {element.effect}</CharacterDetailText>
              </div>
            ))}
          </BlocData>
        </CharacterDetailContainer>
      </div>
    );
  }
}
