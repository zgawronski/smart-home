import React, { FC, useState } from 'react';
import { BoxDiv, Container, Wrapper } from './MainBox.style';

const MainBox: FC = () => {
  const bulbOn = './img/bulb_on.svg';
  const bulbOff = './img/bulb_off.svg';

  const [bulb, setBulb] = useState<string>(bulbOff);

  const turnOff = () => {
    bulb === bulbOn ? setBulb(bulbOff) : setBulb(bulbOn);
  };
  return (
    <Wrapper>
      <h2>Stay smart with smart home</h2>
      <h3>Lista urządzeń podpiętych do systemu</h3>
      <Container>
        <BoxDiv
          onClick={() => {
            turnOff();
          }}
        >
          Żarówka
          <img style={{ width: '15px' }} src={bulb} alt="no source" />
        </BoxDiv>
        <BoxDiv>Gniazdko</BoxDiv>
        <BoxDiv>Czujnik temp</BoxDiv>
      </Container>
    </Wrapper>
  );
};

export default MainBox;
