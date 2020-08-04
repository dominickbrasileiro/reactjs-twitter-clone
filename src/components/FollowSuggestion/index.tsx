import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Avatar,
  Info,
  FollowButton,
} from './styles';

interface Props {
  name: string;
  username: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, username }) => (
  <Container>
    <div>
      <Avatar />

      <Info>
        <strong>{name}</strong>
        <span>{username}</span>
      </Info>

    </div>

    <FollowButton outlined>Follow</FollowButton>
  </Container>
);

FollowSuggestion.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default FollowSuggestion;
