import styled from 'styled-components';
import { GOLD } from './colors';

export const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
`;

export const CharactersBloc = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const CharactersTitle = styled.div`
  font-family: 'harry potter';
  font-size: 30px;
`;

/////////// character detail

export const CharacterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CharacterDetailBloc = styled.div`
  border: black solid 2px;
  border-radius: 3%;
  padding: 5%;
  margin: 5%;
`;

export const CharacterDetailTitle = styled.p`
  font-family: 'harry potter';
  font-size: 34px;
  text-align: center;
`;

export const CharacterDetailSub = styled.p`
  font-size: 20px;
  color: ${GOLD};
  font-weight: 900;
  text-transform: uppercase;
`;

export const CharacterDetailText = styled.p`
  font-size: 16px;
  font-weight: 900;
`;
