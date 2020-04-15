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
        <h1>Magic Houses</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {houses.map((house, i) => (
            <Link key={i} to={`/houses/${house._id}`}>
              <p>{house.name}</p>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
