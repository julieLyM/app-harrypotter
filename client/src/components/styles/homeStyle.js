import styled from 'styled-components';
import { device } from './mediaQuerries';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  @media (${device.mobileL}) {
    height: 90vh;
  }
`;

export const Title = styled.p`
  font-size: 50px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Harry Potter';
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
  @media (${device.mobileL}) {
    font-size: 20px;
  }
  @media (${device.mobileM}) {
    font-size: 18px;
  }
`;

export const HomeButton = styled.button`
  width: 100px;
`;
