import styled from 'styled-components';
import { device } from './mediaQuerries';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (${device.mobileL}) {
  }
`;

export const BlocHome = styled.div`
  text-align: center;
  background: linear-gradient(
    45deg,
    rgba(53, 56, 57, 0.5),
    #19325c,
    #60789e,
    #112038
  );
  background-size: 400%;
  background-position: 0 100%;
  -webkit-animation: anim 10s infinite;
  animation: anim 10s infinite;
  border-radius: 20px;
  padding: 15px;
  text-align: center;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  @keyframes anim {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'HarryPotter';
  color: #f2a412;
  @media (${device.mobileL}) {
    font-size: 30px;
  }
`;

export const HomeTitle = styled.p`
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Indie Flower', cursive;
  @media (${device.mobileL}) {
    font-size: 20px;
  }
  @media (${device.mobileM}) {
    font-size: 18px;
  }
`;

export const HomeButton = styled.button`
  width: 100px;
  border: none;
  background-color: transparent;
  outline: none;
`;

export const HomeImg = styled.img`
  width: 200px;
  height: 230px;
  @media (${device.mobileL}) {
    width: 100px;
    height: 120px;
  }
`;
