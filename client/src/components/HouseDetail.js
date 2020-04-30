import React, { Component } from 'react';
import { getHouseById } from '../service/data';

import {
  HouseDetailContainer,
  DetailHouseBloc,
  DetailHouseText,
  DetailHouseTitle,
  DesignLinkHouseDetail,
  BlocDetailInfo,
} from './styles/housesStyle';

import { BlocData, CharacterDetailSub } from './styles/charactersStyle';

export default class HouseDetail extends Component {
  state = {
    house: [],
  };

  componentDidMount() {
    this.fetchHouseById();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchHouseById();
    }
  }

  fetchHouseById = async () => {
    const data = await getHouseById(this.props.match.params.id);
    this.setState({
      house: data,
    });
  };

  render() {
    const { house } = this.state;
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
  }
}
