import React from 'react';
import { Link } from 'react-router-dom';
import {
  MenuContainer,
  MenuBlocPicture,
  MenuBlocLink,
  DesignLink,
  MenuPicture,
} from './styles/headerStyle';

export const Header = () => {
  return (
    <MenuContainer>
      <MenuBlocPicture>
        <Link to="/">
          {' '}
          <MenuPicture src={`/image/4houses.png`} />
        </Link>
      </MenuBlocPicture>
      <MenuBlocLink>
        <DesignLink to="/Houses">Houses</DesignLink>

        <DesignLink to="/Characters">Characters</DesignLink>

        <DesignLink to="/Spells">Spells</DesignLink>
      </MenuBlocLink>
    </MenuContainer>
  );
};
