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
  font-family: 'HarryPotter';
  font-size: 30px;
`;

export const ButtonBloc = styled.div`
  text-align: center;
  margin: 10px auto;
`;

/////////// character detail

export const CharacterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
export const CharacterDetailBloc = styled.div`
  border: black solid 2px;
  border-radius: 3%;
  padding: 10px 30px;
`;

export const CharacterDetailTitle = styled.p`
  font-family: 'HarryPotter';
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
