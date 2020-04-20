import React, { Component } from 'react';
import { getHatSrv } from '../service/data';
import {
  HomeContainer,
  HomeTitle,
  HomeButton,
  Title,
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
        <img
          src={`/image/hat.png`}
          alt=""
          // style={{ width: '100px', height: '100px' }}
        />
        <HomeButton onClick={this.onClicked}>clic</HomeButton>
        <HomeTitle>{hats}</HomeTitle>
      </HomeContainer>
    );
  }
}
