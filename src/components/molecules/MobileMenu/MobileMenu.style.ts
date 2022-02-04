import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const AppearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  animation: 0.3s 1 forwards ${AppearAnimation};

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 0;

    li {
      margin: 20px 0;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkBlue};
  &:hover {
    text-decoration: underline;
  }
`;
