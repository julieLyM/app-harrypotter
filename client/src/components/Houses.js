import React, { Component } from 'react';
import { getHousesSrv } from '../service/data';

import { HousesTitle, HousesBloc, DesignLink } from './styles/housesStyle';


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
      <div>
        <HousesTitle>Magic Houses</HousesTitle>
        <HousesBloc>
          {houses.map((house, i) => (
            <DesignLink key={i} to={`/houses/${house._id}`}>
              <p>{house.name}</p>
            </DesignLink>
          ))}
        </HousesBloc>
      </div>
    );
  }
}
