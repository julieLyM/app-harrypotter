import styled from 'styled-components';
import { GOLD, GREY } from './colors';
import { Link } from 'react-router-dom';
import { device } from './mediaQuerries';

export const HouseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HousesBloc = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HousesTitle = styled.p`
  font-size: 34px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'HarryPotter';
  text-align: center;
  @media (${device.mobileL}) {
    font-size: 20px;
  }
`;

export const HouseImg = styled.img`
  width: 130px;
  height: 150px;
  @media (${device.mobileL}) {
    width: 100px;
    height: 120px;
  }
`;

export const DesignLink = styled(Link)`
  font-size: 26px;
  margin: 10px;
  font-weight: 900;
  color: ${GOLD};
  text-decoration: none;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
  a:hover {
    color: yellow;
  }
`;

export const HouseDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  align-items: center;
`;

export const DetailHouseBloc = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(45deg, #353839, #19325c, #60789e, #112038);
  background-size: 400%;
  background-position: 0 100%;
  animation: anim 10s infinite;
  margin: 10px;
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
  border-radius: 20px;
  a {
    color: ${GREY};
  }
  width: 50%;
  @media (${device.mobileL}) {
    width: 100%;
  }
`;

export const BlocDetailInfo = styled.div`
  width: 300px;
  margin: 20px;
  text-align: center;
`;

export const DetailHouseTitle = styled.span`
  color: ${GOLD};
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
`;

export const DetailHouseText = styled.p`
  font-weight: 900;
  font-size: 26px;
  font-family: 'Caveat', cursive;
  color: ${GREY};
`;

export const DesignLinkHouseDetail = styled(Link)`
  font-weight: 900;
  font-size: 26px;
  text-decoration: none;
  font-family: 'Caveat', cursive;
  a {
    text-decoration: none;
  }
`;
