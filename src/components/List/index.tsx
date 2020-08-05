/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Item,
  Title,
} from './styles';

interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => (
  <Container>
    <Item>
      <Title>{title}</Title>
    </Item>

    {elements.map((element, index) => (
      <Item key={index}>
        {element}
      </Item>
    ))}
  </Container>
);

List.propTypes = {
  title: PropTypes.string.isRequired,
  elements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
