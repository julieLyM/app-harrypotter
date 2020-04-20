import React, { Component } from 'react';
import { getSpellsDetailSrv } from '../service/data';

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
      <div>
        <h1>Spell Detail</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', padding: '10px' }}>
          {spell.map((element, i) => (
            <div key={i}>
              <p style={{ color: 'red' }}> Name of spell : </p> {element.spell}
              <p style={{ color: 'red' }}> Type of spell :</p> {element.type}
              <p style={{ color: 'red' }}> Effect :</p> {element.effect}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
