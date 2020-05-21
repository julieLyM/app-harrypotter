import React, { useState } from 'react';
import { getHatSrv } from '../service/data';
import {
  HomeContainer,
  HomeTitle,
  HomeButton,
  Title,
  HomeImg,
  BlocHome,
} from './styles/homeStyle';

const Home = () => {
  const [hats, setHats] = useState([]);

  const fetchHat = async () => {
    const data = await getHatSrv();
    setHats(data);
  };

  const onClicked = () => {
    fetchHat();
  };

  return (
    <HomeContainer>
      <Title>Harry Potter</Title>
      <BlocHome>
        <HomeImg src={`/image/hat.png`} alt="" />
        <HomeTitle>Which Hogwarts house are you?</HomeTitle>
        <HomeButton onClick={onClicked}>
          <img src={`/image/wand.svg`} alt="" style={{ width: '50px' }} />
        </HomeButton>
        <HomeTitle>{hats}</HomeTitle>
      </BlocHome>
    </HomeContainer>
  );
};

export default Home;
