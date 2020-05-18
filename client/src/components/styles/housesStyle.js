import styled from 'styled-components';
import { GOLD, DARK_GREY } from './colors';
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
  font-size: 46px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'HarryPotter';
  text-align: center;
  color: ${GOLD};
  border-radius: 20px;
  @media (${device.mobileL}) {
    font-size: 20px;
  }
`;

export const HouseImg = styled.img`
  width: 180px;
  height: 200px;
  &:hover {
    transform: rotateZ(20deg);
  }
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
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  a {
    color: ${DARK_GREY};
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
  font-family: 'Montserrat', sans-serif;
  color: ${DARK_GREY};
`;

export const DesignLinkHouseDetail = styled(Link)`
  font-weight: 900;
  font-size: 26px;
  text-decoration: none;
  color: ${DARK_GREY};
  font-family: 'Montserrat', sans-serif;
  &:hover {
    color: ${GOLD};
  }
`;
