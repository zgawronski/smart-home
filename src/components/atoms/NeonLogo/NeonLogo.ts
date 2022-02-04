import styled from 'styled-components';

export const NeonLogo = styled.div`
  position: relative;
  font-family: 'Balsamiq Sans', cursive;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.neon};
  border: ${({ theme }) => theme.colors.neon} 0.1em solid;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 0.25em;
  margin: 0.2em;
  padding: 0.15em 0.5em;

  text-shadow: 0 0 0.125em ${({ theme }) => theme.colors.neonLight}, 0 0 0.45em ${({ theme }) => theme.colors.neon};
  box-shadow: inset 0 0 0.5em ${({ theme }) => theme.colors.neon}, 0 0 0.5em ${({ theme }) => theme.colors.neon};

  transition: background-color 100ms linear;

  ::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow: 0 0 2em 0.125em ${({ theme }) => theme.colors.neon};
    opacity: 0;
    transition: opacity 100ms linear;
  }
  :hover,
  :focus {
    background: ${({ theme }) => theme.colors.neon};
    color: ${({ theme }) => theme.colors.darkBlue};
    text-shadow: none;
  }

  :hover::after {
    opacity: 1;
  }
`;
