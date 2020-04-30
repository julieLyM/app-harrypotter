import React, { Component } from 'react';
import { getHatSrv } from '../service/data';
import {
  HomeContainer,
  HomeTitle,
  HomeButton,
  Title,
  HomeImg,
  BlocHome,
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
        <BlocHome>
          <HomeImg src={`/image/hat.png`} alt="" />
          <HomeTitle>Which houses are you in ?</HomeTitle>
          <HomeButton onClick={this.onClicked}>
            <img src={`/image/wand.svg`} alt="" style={{ width: '50px' }} />
          </HomeButton>
          <HomeTitle>{hats}</HomeTitle>
        </BlocHome>
      </HomeContainer>
    );
  }
}
