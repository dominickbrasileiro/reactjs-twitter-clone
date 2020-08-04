import React from 'react';

import Button from '../Button';

import {
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => (
  <Container>
    <Topside>
      <MenuButton>
        <HomeIcon />
        <span>Home</span>
      </MenuButton>

      <MenuButton>
        <BellIcon />
        <span>Notifications</span>
      </MenuButton>

      <MenuButton>
        <EmailIcon />
        <span>Messages</span>
      </MenuButton>

      <MenuButton>
        <FavoriteIcon />
        <span>Favorites</span>
      </MenuButton>

      <MenuButton className="active">
        <ProfileIcon />
        <span>Profile</span>
      </MenuButton>

      <Button>
        <span>Tweet</span>
      </Button>
    </Topside>

    <Botside>
      <Avatar />

      <ProfileData>
        <strong>Dominick Brasileiro</strong>
      </ProfileData>

      <ExitIcon />
    </Botside>
  </Container>
);

export default MenuBar;
