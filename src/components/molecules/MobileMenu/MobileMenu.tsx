import React, { FC, useState } from 'react';
import { Navigation, StyledLink } from './MobileMenu.style';
import { MenuToggleButton } from './../../atoms/MenuToggleButton/MenuToggleButton';

const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuToggleButton isOpen={isOpen} onClick={() => setIsOpen((prevState) => !prevState)}>
        <span />
        <span />
      </MenuToggleButton>
      {isOpen ? (
        <Navigation>
          <ul>
            <li>
              <StyledLink to="/">Start</StyledLink>
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
        </Navigation>
      ) : null}
    </>
  );
};

export default MobileMenu;
