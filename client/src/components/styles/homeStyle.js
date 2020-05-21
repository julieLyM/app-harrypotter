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
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  text-align: center;
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'HarryPotter';
  color: #f2a412;
  &:hover {
    transform: rotateY(20deg);
  }
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
  &:hover {
    transform: rotateZ(45deg);
  }
`;

export const HomeImg = styled.img`
  width: 200px;
  height: 230px;
  @media (${device.mobileL}) {
    width: 100px;
    height: 120px;
  }
`;
