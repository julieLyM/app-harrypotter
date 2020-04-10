import React, { Component } from 'react';
import { getHatSrv } from '../service/data';

export default class Home extends Component {
  state = {
    hats: [],
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.hats === null) {
      this.onClicked();
    }
  }

  fetchHat = async () => {
    const data = await getHatSrv();
    this.setState({
      hats: data,
    });
  };

  onClicked = async () => {
    await this.fetchHat();
  };
  render() {
    const { hats } = this.state;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1>Clic which houses are you in ?</h1>
        <button onClick={this.onClicked}>clic</button>
        {hats}
      </div>
    );
  }
}
