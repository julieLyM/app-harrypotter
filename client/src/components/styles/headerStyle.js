import styled from 'styled-components';
import { GREEN, LIGHT_BLUE } from './colors';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #b47704;
  height: 15vh;
`;

export const MenuTitle = styled.p`
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
`;

export const MenuBlocPicture = styled.div``;

export const MenuPicture = styled.img`
  width: 130px;
  height: 130px;
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
  font-size: 26px;
  margin: 0 10px;
  color: black;
`;
