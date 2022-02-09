import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
  margin: auto;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  width: 80%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
`;
