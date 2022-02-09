import React, { FC } from 'react';
import { Container, Wrapper } from './MainBox.style';
import '@interactjs/actions/drag';
//import interact from '@interactjs/interact';
import interact from 'interactjs';

import { Bulb } from '../../atoms/Device/Bulb';
import { Outlet } from '../../atoms/Device/Outlet';
import { TemperatureSensor } from '../../atoms/Device/TemperatureSensor';

const MainBox: FC = () => {
  interact('.draggable').draggable({
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true,
      }),
    ],
    listeners: {
      move(event) {
        const position = { x: parseFloat(event.target.getAttribute('data-x')) || 0, y: parseFloat(event.target.getAttribute('data-y')) || 0 };
        position.x += event.dx;
        position.y += event.dy;

        event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        event.target.setAttribute('data-x', position.x);
        event.target.setAttribute('data-y', position.y);
      },
    },
  });
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
