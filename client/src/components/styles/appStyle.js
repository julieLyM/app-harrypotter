import styled from 'styled-components';
import { device } from './mediaQuerries';

export const AppContent = styled.div`
  background-image: url(${`/image/poudlard.jpg`});
  background-repeat: repeat-x;
  background-size: cover;
  min-height: 83vh;
  min-width: 100vw;
  @media (${device.mobileL}) {
    min-height: 90vh;
    min-width: 100vw;
  }
  @media (${device.mobileM}) {
    min-height: 100vh;
    min-width: 110vw;
  }
`;

export const TwoContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (${device.mobileL}) {
    flex-direction: column;
  }
`;
