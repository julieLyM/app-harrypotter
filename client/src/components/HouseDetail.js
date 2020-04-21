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
                <DetailHouseTitle>Mascot:</DetailHouseTitle>{' '}
                <DetailHouseText> {mascot}</DetailHouseText>
                <DetailHouseTitle>headOfHouse:</DetailHouseTitle>
                <DetailHouseText> {headOfHouse}</DetailHouseText>
                <DetailHouseTitle>houseGhost:</DetailHouseTitle>
                <DetailHouseText> {houseGhost}</DetailHouseText>
                <DetailHouseTitle>founder:</DetailHouseTitle>
                <DetailHouseText>{founder} </DetailHouseText>
                <DetailHouseTitle>school:</DetailHouseTitle>{' '}
                <DetailHouseText>{school}</DetailHouseText>
                <div>
                  <DetailHouseTitle>values of house:</DetailHouseTitle>
                  {values.map((element, i) => (
                    <div key={i}>
                      <DetailHouseText>{element}</DetailHouseText>
                    </div>
                  ))}
                </div>
                <p></p>
                <div>
                  <DetailHouseTitle>colors of house:</DetailHouseTitle>
                  {colors.map((element, i) => (
                    <div key={i}>
                      <DetailHouseText>{element}</DetailHouseText>
                    </div>
                  ))}
                </div>
              </BlocDetailInfo>

              <BlocDetailInfo>
                <DetailHouseTitle>members of house:</DetailHouseTitle>
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
