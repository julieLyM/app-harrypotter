import React, { Component } from 'react';
import { getHousesSrv } from '../service/data';

import {
  HousesTitle,
  HousesBloc,
  DesignLink,
  HouseContainer,
} from './styles/housesStyle';

// const rav = `${`/image/rav.png`}`
// if (`${house._id}` === `${house.5a05da69d45bd0a11bd5e06f}`){
//   return rav
// }

export default class Spells extends Component {
  state = {
    houses: [],
  };

  componentDidMount() {
    this.fetchHouse();
  }

  fetchHouse = async (id) => {
    const data = await getHousesSrv(id);
    this.setState({
      houses: data,
    });
  };

  render() {
    const { houses } = this.state;
    return (
      <HouseContainer>
        <HousesTitle>Magic Houses</HousesTitle>
        <div style={{ display: 'flex' }}>
          <DesignLink to={`/houses/5a05e2b252f721a3cf2ea33f`}>
            <img
              src={`/image/griffon.png`}
              alt=""
              style={{ width: '250px', height: '250px' }}
            />
          </DesignLink>
          <DesignLink to={`/houses/5a05da69d45bd0a11bd5e06f`}>
            <img
              src={`/image/rav.png`}
              alt=""
              style={{ width: '250px', height: '250px' }}
            />{' '}
          </DesignLink>

          <DesignLink to={`/houses/5a05dc8cd45bd0a11bd5e071`}>
            <img
              src={`/image/slytherin.png`}
              alt=""
              style={{ width: '250px', height: '250px' }}
            />
          </DesignLink>

          <DesignLink to={`/houses/5a05dc58d45bd0a11bd5e070`}>
            <img
              src={`/image/pouff.png`}
              alt=""
              style={{ width: '250px', height: '250px' }}
            />{' '}
          </DesignLink>
        </div>
        {/* <HousesBloc>
          {houses.map((house, i) => (
            <DesignLink key={i} to={`/houses/${house._id}`}>
              <p>{house.name}</p>
            </DesignLink>
          ))}
        </HousesBloc> */}
      </HouseContainer>
    );
  }
}
