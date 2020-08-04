import React from 'react';

import MenuBar from '../MenuBar';
import Main from '../Main';
import SideBar from '../SideBar';

import { Container, Wrapper } from './styles';

const Layouts: React.FC = () => (
  <Container>
    <Wrapper>
      <MenuBar />
      <Main />
      <SideBar />
    </Wrapper>
  </Container>
);

export default Layouts;
