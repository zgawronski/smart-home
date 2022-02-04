import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.darkBlue};

  ul {
    display: flex;
    position: relative;
    list-style: none;
    margin-left: auto;
    padding: 0;
    align-items: center;
    margin-right: 100px;
    @media (max-width: 719px) {
      display: none;
    }

    li {
      margin-right: 20px;
    }
  }
`;

const activeClassName = 'active-Link';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neon};
  position: relative;

  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 3em;
    height: 0.1em;
    bottom: -20px;
    transform: translateX(-50%);
    left: 50%;
    background-color: ${({ theme }) => theme.colors.neon};
  }
`;
