import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getHouseById } from '../service/data';

import {
  HouseDetailContainer,
  DetailHouseBloc,
  DetailHouseText,
  DesignLinkHouseDetail,
  BlocDetailInfo,
} from './styles/housesStyle';

import { CharacterDetailSub } from './styles/charactersStyle';

const HouseDetail = () => {
  const [house, setHouse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchHouseById = async () => {
      const data = await getHouseById(id);
      setHouse(data);
    };
    fetchHouseById();
  }, [id]);

  return (
    <HouseDetailContainer>
      {house.map(
        (
          {
            mascot,
            colors,
            members,
            headOfHouse,
            houseGhost,
            founder,
            values,
            school,
          },
          i
        ) => (
          <DetailHouseBloc key={i}>
            <BlocDetailInfo>
              <CharacterDetailSub>Mascot:</CharacterDetailSub>{' '}
              <DetailHouseText> {mascot}</DetailHouseText>
              <CharacterDetailSub>headOfHouse:</CharacterDetailSub>
              <DetailHouseText> {headOfHouse}</DetailHouseText>
              <CharacterDetailSub>houseGhost:</CharacterDetailSub>
              <DetailHouseText> {houseGhost}</DetailHouseText>
              <CharacterDetailSub>founder:</CharacterDetailSub>
              <DetailHouseText>{founder} </DetailHouseText>
              <CharacterDetailSub>school:</CharacterDetailSub>{' '}
              <DetailHouseText>{school}</DetailHouseText>
              <div>
                <CharacterDetailSub>values of house:</CharacterDetailSub>
                {values.map((element, i) => (
                  <div key={i}>
                    <DetailHouseText>{element}</DetailHouseText>
                  </div>
                ))}
              </div>
              <p></p>
              <div>
                <CharacterDetailSub>colors of house:</CharacterDetailSub>
                {colors.map((element, i) => (
                  <div key={i}>
                    <DetailHouseText>{element}</DetailHouseText>
                  </div>
                ))}
              </div>
            </BlocDetailInfo>

            <BlocDetailInfo>
              <CharacterDetailSub>members of house:</CharacterDetailSub>
              {members.map((element, i) => (
                <div key={i}>
                  <DesignLinkHouseDetail to={`/characters/${element._id}`}>
                    <p>{element.name}</p>
                  </DesignLinkHouseDetail>
                </div>
              ))}
            </BlocDetailInfo>
          </DetailHouseBloc>
        )
      )}
    </HouseDetailContainer>
  );
};

export default HouseDetail;
