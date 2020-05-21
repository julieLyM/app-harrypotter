import styled from 'styled-components';
import { GOLD } from './colors';
import { Link } from 'react-router-dom';
import { device } from './mediaQuerries';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: linear-gradient(45deg, #353839, #19325c, #60789e, #112038);
  background-size: 400%;
  background-position: 0 100%;
  animation: anim 10s infinite;
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
  min-height: 15vh;
  min-width: 100vw;
  @media (${device.mobileM}) {
    min-width: 110vw;
  }
`;

export const MenuTitle = styled.p`
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  @media (${device.mobileL}) {
    font-size: 16px;
  }
  @media (${device.mobileM}) {
    font-size: 14px;
    text-align: center;
  }
  @media (${device.mobileS}) {
    font-size: 14px;
    text-align: center;
  }
`;

export const MenuBlocPicture = styled.div``;

export const MenuPicture = styled.img`
  width: 130px;
  height: 130px;
  &:hover {
    transform: rotateY(45deg);
  }
  @media (${device.mobileL}) {
    width: 80px;
    height: 80px;
  }
`;

export const MenuBlocLink = styled.div`
  cursor: not-allowed;
  align-self: center;
  a {
    text-decoration: none;
  }
`;

export const DesignLink = styled(Link)`
  font-family: 'HarryPotter';
  font-size: 40px;
  margin: 0 18px;
  color: white;
  &:hover {
    color: ${GOLD};
  }
  @media (${device.mobileL}) {
    font-size: 24px;
  }
  @media (${device.mobileM}) {
    font-size: 24px;
  }
  @media (${device.mobileS}) {
    font-size: 18px;
  }
`;
