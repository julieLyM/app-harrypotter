import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getHousesSrv } from '../service/data';

export default class Spells extends Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.fetchHouse();
  }

  fetchHouse = async () => {
    const data = await getHousesSrv();
    this.setState({
      houses: data,
    });
  };
  render() {
    const { houses } = this.state;
    return (
      <div>
        <h1>Magic Houses</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {houses.map(
            (
              {
                name,
                mascot,
                colors,
                members,
                headOfHouse,
                houseGhost,
                founder,
                values,
                school,
              },
              i
            ) => (
              <div
                key={i}
                style={{ border: '1px solid blue', flex: '1 1 150px' }}
              >
                <h2>{name}</h2>
                <p> {mascot}</p>
                <p> {headOfHouse}</p>
                <p> {houseGhost}</p>
                <p>{founder} </p>
                <p>{school}</p>
                <div>
                  <h4>values of house:</h4>
                  {values.map((element, i) => (
                    <div key={i}>{element}</div>
                  ))}
                </div>
                <div>
                  <h4>colors of house:</h4>
                  {colors.map((element, i) => (
                    <div key={i}>{element}</div>
                  ))}
                </div>
                <div>
                  <h4>members of house:</h4>
                  {members.map((element, i) => (
                    <div key={i}>
                      <Link to={`/characters/${element}`}>{element}</Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
