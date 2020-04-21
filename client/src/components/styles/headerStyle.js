import styled from 'styled-components';
import { GOLD } from './colors';
import { Link } from 'react-router-dom';
import { device } from './mediaQuerries';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: ${GOLD};
  @media (${device.mobileM}) {
    width: 100%;
    padding: 5%;
  }
  @media (${device.mobileS}) {
    padding: 5%;
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
  font-family: 'Harry Potter';
  font-size: 40px;
  margin: 0 18px;
  color: black;
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
