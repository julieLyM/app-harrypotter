import styled from 'styled-components';
import { GOLD, DARK_GREY, GREY } from './colors';
import { device } from './mediaQuerries';

export const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px 30px;
  @media (${device.mobileL}) {
    width: 85%;
    margin: 0 auto;
  }
`;

export const CharactersBloc = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ContainerData = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const BlocData = styled.div`
  background: rgba(255, 255, 255, 0.8);
  margin: 10px;
  border-radius: 20px;
  padding: 5%;
  width: 80%;
  a {
    color: ${DARK_GREY};
  }
`;

export const ButtonBloc = styled.div`
  display: flex;
  justify-content: space-around;
  color: ${DARK_GREY};
  button {
    border: none;
    background-color: transparent;
    outline: none;
  }
`;

export const ImgLinkBtn = styled.img`
  width: 50px;
  height: 50px;
`;

export const TextSimple = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const Loading = styled.div`
  text-align: center;
  margin: 10% auto;
  height: 200px;
  width: 280px;
  background: rgba(255, 255, 255, 0.8);
`;

export const LoadingTitle = styled.p`
  color: ${GOLD};
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-size: 28px;
  font-weight: 900;
  margin: auto;
`;

export const LoadingImg = styled.img`
  width: 250px;
`;

export const CharacterDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  color: ${GREY};
  font-family: 'Montserrat', sans-serif;
`;
export const CharacterDetailBloc = styled.div`
  border-radius: 50px;
  padding: 30px;
  color: ${DARK_GREY};
`;

export const CharacterTitle = styled.p`
  font-family: 'HarryPotter';
  font-size: 44px;
  text-align: center;
  margin: 10px;
  color: ${GOLD};
`;

export const DetailTitle = styled.p`
  color: ${GOLD};
  font-family: 'HarryPotter';
  font-size: 34px;
  text-align: center;
`;

export const CharacterDetailSub = styled.span`
  font-size: 24px;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: ${GOLD};
  @media (${device.mobileL}) {
    font-size: 20px;
  }
`;

export const CharacterDetailText = styled.span`
  font-size: 24px;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  color: ${DARK_GREY};
  @media (${device.mobileL}) {
    font-size: 16px;
  }
`;

export const SpellImg = styled.img`
  width: 40%;
  height: 60%;
  margin: auto 0;
  @media (${device.mobileL}) {
    display: none;
  }
`;
