import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => (
  <Container>
    <Banner>
      <Avatar />
    </Banner>

    <ProfileData>
      <EditButton outlined>Editar perfil</EditButton>

      <h1>Dominick Brasileiro</h1>
      <h2>@dominickjs</h2>

      <p>
        Software Developer | Fascinated by Technology
      </p>

      <ul>
        <li>
          <LocationIcon />
          Joinville, Brazil
        </li>

        <li>
          <CakeIcon />
          Born August 26, 2003
        </li>
      </ul>

      <Followage>
        <span>
          <strong>501</strong>
          {' '}
          Following
        </span>

        <span>
          <strong>1.3K</strong>
          {' '}
          Followers
        </span>
      </Followage>
    </ProfileData>
  </Container>
);

export default ProfilePage;
