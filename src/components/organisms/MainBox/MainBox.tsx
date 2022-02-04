import React, { FC } from 'react';
import { BoxDiv, Container, Wrapper } from './MainBox.style';

const MainBox: FC = () => {
  return (
    <Wrapper>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit recusandae amet illum praesentium, ea tempore aliquid pariatur. Quos officiis
        eaque quibusdam aliquam aspernatur qui molestias facilis adipisci exercitationem sunt! Nemo!
      </h2>
      <h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facere voluptatem pariatur reprehenderit voluptas eveniet adipisci quae mollitia
        nemo dolore expedita animi sapiente, quidem distinctio eaque maxime iusto repudiandae natus?
      </h5>
      <Container>
        <BoxDiv>Żarówka</BoxDiv>
        <BoxDiv>Gniazdko</BoxDiv>
        <BoxDiv>Czujnik temp</BoxDiv>
      </Container>
    </Wrapper>
  );
};

export default MainBox;
