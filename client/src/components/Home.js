import React, { Component } from 'react';
import { getHatSrv } from '../service/data';
import {
  HomeContainer,
  HomeTitle,
  HomeButton,
  Title,
  HomeImg,
} from './styles/homeStyle';
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
        <Title>Harry Potter</Title>

        <HomeTitle>Clic which houses are you in ?</HomeTitle>
        <HomeImg src={`/image/hat.png`} alt="" />
        <HomeButton onClick={this.onClicked}>clic</HomeButton>
        <HomeTitle>{hats}</HomeTitle>
      </HomeContainer>
    );
  }
}
