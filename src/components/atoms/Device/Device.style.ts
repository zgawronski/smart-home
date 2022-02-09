import styled from 'styled-components';

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  max-width: 250px;
  max-height: 135px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  align-items: center;
  justify-content: center;
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
