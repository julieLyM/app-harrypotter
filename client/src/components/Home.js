import React, { Component } from 'react';
import { getHatSrv } from '../service/data';
import { HomeContainer, HomeTitle, HomeButton } from './styles/homeStyle';

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
      <HomeContainer>
        <HomeTitle>Clic which houses are you in ?</HomeTitle>
        <HomeButton onClick={this.onClicked}>clic</HomeButton>
        {hats}
      </HomeContainer>
    );
  }
}
