import React, { Component } from 'react';
import { getHouseById } from '../service/data';
import { Link } from 'react-router-dom';

import { HouseDetailContainer } from './styles/housesStyle';

export default class HouseDetail extends Component {
  state = {
    house: [],
  };

  componentDidMount() {
    this.fetchHouseById();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchHouseById();
    }
  }

  fetchHouseById = async () => {
    const data = await getHouseById(this.props.match.params.id);
    this.setState({
      house: data,
    });
  };

  render() {
    const { house } = this.state;
    return (
      <HouseDetailContainer>
        {house.map(
          (
            {
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
                    <Link to={`/characters/${element._id}`}>
                      {element.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </HouseDetailContainer>
    );
  }
}
