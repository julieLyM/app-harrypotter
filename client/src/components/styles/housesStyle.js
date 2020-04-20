import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  font-size: 28px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: 'Harry Potter';
  text-align: center;
`;

export const DesignLink = styled(Link)`
  font-size: 26px;
  margin: 0 10px 0 0;
  color: white;
  font-weight: 900;
  text-decoration: none;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
`;

//////////////////////

export const HouseDetailContainer = styled.div`
  border: solid 2px red;
  display: flex;
  flex-direction: column;
`;

export const DetailHouseBloc = styled.div`
  border: solid 2px green;
  text-align: center;
`;

export const DetailHouseTitle = styled.span`
  color: red;
  text-transform: uppercase;
`;

export const DetailHouseText = styled.p`
  color: blue;
`;
