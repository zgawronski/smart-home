import styled from 'styled-components';

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  max-width: 250px;
  max-height: 135px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.neon};
  touch-action: none;
  user-select: none;
  #drag-1,
  #drag-2,
  #drag-3 {
    transform: translate(0px, 0px);
  }
  p {
    margin: 5px;
  }
`;

export const BoxP = styled.p<{ colorX: string }>`
   {
    margin: 5px;
    color: ${({ theme, colorX }) => {
      if (colorX === ('connected' as string)) return theme.colors.white;
      if (colorX === ('disconnected' as string)) return theme.colors.darkGrey;
      if (colorX === ('poorConnection' as string)) return theme.colors.red;
      return theme.colors.white;
    }};
  }
`;
