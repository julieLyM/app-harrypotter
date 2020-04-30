import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSpellsSrv } from '../service/data';

import { DesignLinkHouseDetail } from './styles/housesStyle';
import {
  CharacterTitle,
  ButtonBloc,
  ImgLinkBtn,
  TextSimple,
  Loading,
  LoadingTitle,
  LoadingImg,
  CharactersContainer,
  BlocData,
  ContainerData,
} from './styles/charactersStyle';

export default class Spells extends Component {
  state = {
    spells: [],
    page: 1,
    isLoading: false,
  };

  componentDidMount() {
    this.fetchSpell();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchSpell();
    }
  }

  fetchSpell = async () => {
    const data = await getSpellsSrv(this.state.page);
    this.setState({
      spells: data,
      isLoading: true,
    });
  };

  changePage = (pageNumber) => {
    this.setState(({ page }) => ({ page: page + pageNumber }));
  };

  render() {
    const { spells, isLoading } = this.state;
    const notLoading = (
      <Loading>
        <LoadingTitle>loading...</LoadingTitle>
        <LoadingImg src={`/image/magic.gif`} alt="" />
      </Loading>
    );
    return (
      <CharactersContainer>
        <CharacterTitle>All Spells</CharacterTitle>
        <ContainerData>
          {!isLoading ? (
            notLoading
          ) : (
            <BlocData>
              {spells.map(({ spell, _id }, i) => (
                <div key={i}>
                  <DesignLinkHouseDetail key={i} to={`/Spells/${_id}`}>
                    <TextSimple>{spell}</TextSimple>
                  </DesignLinkHouseDetail>
                </div>
              ))}
              <ButtonBloc>
                <Link onClick={this.changePage.bind(null, -1)}>
                  <ImgLinkBtn src={`/image/left.svg`} alt="" />
                </Link>
                <Link onClick={this.changePage.bind(null, 1)}>
                  <ImgLinkBtn src={`/image/right.svg`} alt="" />
                </Link>
              </ButtonBloc>
            </BlocData>
          )}
        </ContainerData>
      </CharactersContainer>
    );
  }
}
