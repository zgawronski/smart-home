import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 85%;
  margin: auto;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(2, 6fr);
  grid-gap: 10%; */
  width: 80%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  > * {
    flex: 1 1 5em;
  }
`;

export const BoxDiv = styled.div`
  display: flex;
  border: solid 1px purple;
  margin: 20px;
  max-width: 10%;
  max-height: 10%;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.boxBackground};
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.neon};
`;
