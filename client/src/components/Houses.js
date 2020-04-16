import React, { Component } from 'react';
import { getHousesSrv } from '../service/data';

import { HousesTitle, HousesBloc, DesignLink } from './styles/housesStyle';

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
