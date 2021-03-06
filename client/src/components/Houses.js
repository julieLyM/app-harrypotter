import React from 'react';
import {
  HousesTitle,
  HousesBloc,
  DesignLink,
  HouseImg,
  HouseContainer,
} from './styles/housesStyle';

const Houses = () => {
  return (
    <HouseContainer>
      <HousesTitle>Magic Houses</HousesTitle>
      <HousesBloc>
        <DesignLink to={`/houses/5a05e2b252f721a3cf2ea33f`}>
          <HouseImg src={`/image/griffon.png`} alt="" />
        </DesignLink>
        <DesignLink to={`/houses/5a05da69d45bd0a11bd5e06f`}>
          <HouseImg src={`/image/rav.png`} alt="" />
        </DesignLink>

        <DesignLink to={`/houses/5a05dc8cd45bd0a11bd5e071`}>
          <HouseImg src={`/image/slytherin.png`} alt="" />
        </DesignLink>

        <DesignLink to={`/houses/5a05dc58d45bd0a11bd5e070`}>
          <HouseImg src={`/image/pouff.png`} alt="" />
        </DesignLink>
      </HousesBloc>
    </HouseContainer>
  );
};

export default Houses;
