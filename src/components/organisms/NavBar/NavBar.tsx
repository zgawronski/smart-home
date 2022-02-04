import React, { FC } from 'react';
import { Wrapper, StyledLink } from './NavBar.style';
import { NeonLogo } from '../../atoms/NeonLogo/NeonLogo';
import MobileMenu from '../../molecules/MobileMenu/MobileMenu';
import { NavLink } from 'react-router-dom';

const NavBar: FC = () => {
  return (
    <Wrapper>
      <NavLink exact to="/">
        <NeonLogo>Aurora</NeonLogo>
      </NavLink>
      <ul>
        <li>
          <StyledLink exact to="/">
            Start
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/services">Usługi</StyledLink>
        </li>
        <li>
          <StyledLink to="/galery">Galeria</StyledLink>
        </li>
        <li>
          <StyledLink to="/contact">Kontakt</StyledLink>
        </li>
      </ul>
      <MobileMenu />
    </Wrapper>
  );
};

export default NavBar;
