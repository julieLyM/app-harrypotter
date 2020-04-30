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
  background: linear-gradient(
    45deg,
    rgba(53, 56, 57, 0.5),
    #19325c,
    #60789e,
    #112038
  );
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
  padding: 5%;
  a {
    color: ${GOLD};
  }
`;

export const ButtonBloc = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
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
  height: 180px;
  width: 280px;
  border-radius: 20px;
  background-color: black;
`;

export const LoadingTitle = styled.p`
  color: ${GOLD};
  text-transform: uppercase;
  font-family: 'Caveat', cursive;
  font-size: 20px;
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
  font-family: 'Caveat', cursive;
`;
export const CharacterDetailBloc = styled.div`
  background: ${DARK_GREY};
  border-radius: 50px;
  padding: 30px;
  color: white;
`;

export const CharacterTitle = styled.p`
  font-family: 'HarryPotter';
  font-size: 44px;
  text-align: center;
  margin: 10px;
`;

export const DetailTitle = styled.p`
  color: white;
  font-family: 'HarryPotter';
  font-size: 34px;
  text-align: center;
`;

export const CharacterDetailSub = styled.span`
  font-size: 20px;
  text-align: center;
  color: ${GOLD};
  font-weight: 900;
  text-transform: uppercase;
  @media (${device.mobileL}) {
    font-size: 16px;
  }
`;

export const CharacterDetailText = styled.span`
  font-size: 26px;
  font-weight: 900;
`;

export const SpellImg = styled.img`
  width: 40%;
  height: 60%;
  margin: auto 0;
  @media (${device.mobileL}) {
    display: none;
  }
`;
