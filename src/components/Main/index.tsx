import React from 'react';

import ProfilePage from '../ProfilePage';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  BellIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => (
  <Container>
    <Header>
      <button type="button">
        <BackIcon />
      </button>

      <ProfileInfo>
        <strong>Dominick Brasileiro</strong>
        <span>738 Tweets</span>
      </ProfileInfo>
    </Header>

    <ProfilePage />

    <BottomMenu>
      <HomeIcon className="active" />
      <SearchIcon />
      <BellIcon />
      <EmailIcon />
    </BottomMenu>
  </Container>
);

export default Main;
