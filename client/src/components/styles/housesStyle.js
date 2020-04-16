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

  a {
    text-decoration: none;
  }
`;

export const HouseDetailContainer = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
