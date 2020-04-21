import React, { Component } from 'react';
import { getHousesSrv } from '../service/data';
import {
  HousesTitle,
  HousesBloc,
  DesignLink,
  HouseImg,
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
    // const { houses } = this.state;
    return (
      <HouseContainer>
        <HousesTitle>Magic Houses</HousesTitle>
        <HousesBloc>
          <DesignLink to={`/houses/5a05e2b252f721a3cf2ea33f`}>
            <HouseImg src={`/image/griffon.png`} alt="" />
          </DesignLink>
          <DesignLink to={`/houses/5a05da69d45bd0a11bd5e06f`}>
            <HouseImg src={`/image/rav.png`} alt="" />
          </DesignLink>

          <DesignLink to={`/houses/5a05dc8cd45bd0a11bd5e071`}>
            <HouseImg src={`/image/slytherin.png`} alt="" />
          </DesignLink>

          <DesignLink to={`/houses/5a05dc58d45bd0a11bd5e070`}>
            <HouseImg src={`/image/pouff.png`} alt="" />
          </DesignLink>
        </HousesBloc>
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
