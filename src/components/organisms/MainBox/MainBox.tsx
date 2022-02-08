import React, { FC } from 'react';
import { Container, Wrapper } from './MainBox.style';

import { Bulb } from '../../atoms/Device/Bulb';
import { Outlet } from '../../atoms/Device/Outlet';
import { TemperatureSensor } from '../../atoms/Device/TemperatureSensor';

const MainBox: FC = () => {
  return (
    <Wrapper>
      <h2>Stay smart with smart home</h2>
      <h3>Lista urządzeń podpiętych do systemu</h3>
      <Container>
        <Bulb />
        <Outlet />
        <TemperatureSensor />
      </Container>
    </Wrapper>
  );
};

export default MainBox;
