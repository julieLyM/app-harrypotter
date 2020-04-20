import React, { Component } from 'react';
import { getHouseById } from '../service/data';
import { Link } from 'react-router-dom';

import {
  HouseDetailContainer,
  DetailHouseBloc,
  DetailHouseText,
  DetailHouseTitle,
} from './styles/housesStyle';

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
            <DetailHouseBloc key={i}>
              <DetailHouseTitle>Mascot:</DetailHouseTitle>{' '}
              <DetailHouseText> {mascot}</DetailHouseText>
              <DetailHouseTitle>headOfHouse:</DetailHouseTitle>
              <DetailHouseText> {headOfHouse}</DetailHouseText>
              <DetailHouseTitle>houseGhost:</DetailHouseTitle>
              <DetailHouseText> {houseGhost}</DetailHouseText>
              <DetailHouseTitle>founder:</DetailHouseTitle>
              <DetailHouseText>{founder} </DetailHouseText>
              <DetailHouseTitle>school:</DetailHouseTitle>{' '}
              <DetailHouseText>{school}</DetailHouseText>
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
            </DetailHouseBloc>
          )
        )}
      </HouseDetailContainer>
    );
  }
}
