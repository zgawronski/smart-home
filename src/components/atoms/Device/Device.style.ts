import styled from 'styled-components';

export const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px purple;
  margin: 20px;
  max-width: 10%;
  max-height: 25 %;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.neon};

  img {
    margin: 0.5em;
  }
`;
