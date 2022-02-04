import styled from 'styled-components';

export const MenuToggleButton = styled.button<{ isOpen: boolean }>`
  width: 2em;
  height: 2em;
  position: absolute;
  z-index: 1000;
  top: 30px;
  right: 5%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border: 2px solid ${({ theme }) => theme.colors.neon};
  @media (min-width: 720px) {
    display: none;
  }

  span:first-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(${({ isOpen }) => (isOpen ? 'calc(-100% - 2px)' : 0)});
    transition: transform ease-in-out 0.3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 0.9em;
      height: 0.2em;
      background-color: ${({ theme }) => theme.colors.neon};
      left: 50%;
    }

    &::before {
      top: 8px;
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      bottom: 8px;
      transform: translate(-50%, 50%) rotate(45deg);
    }
  }

  span:last-child {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: calc(100% + 2px);
    transform: translateX(${({ isOpen }) => (isOpen ? 'calc(-100% - 2px)' : 0)});
    transition: transform ease-in-out 0.3s;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 1.7em;
      height: 0.2em;
      background-color: ${({ theme }) => theme.colors.neon};
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
`;
