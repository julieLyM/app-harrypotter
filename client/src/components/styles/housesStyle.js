import styled from 'styled-components';
import { GOLD } from './colors';
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
  color: '#F0452B';
  text-decoration: none;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
  a:hover {
    color: yellow;
  }
`;

////////////////////// house detail

export const HouseDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  align-items: center;
`;

export const DetailHouseBloc = styled.div`
  display: flex;
  justify-content: center;
  border: solid black 2px;
  border-radius: 2%;
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
  text-transform: uppercase;
`;

export const DetailHouseText = styled.p`
  font-weight: 900;
`;

export const DesignLinkHouseDetail = styled(Link)`
  font-weight: 900;
  color: black;
  text-decoration: none;
  a {
    text-decoration: none;
  }
`;
