import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => (
  <Container>
    <SearchWrapper>
      <SearchInput placeholder="Search Twitter" />
      <SearchIcon />
    </SearchWrapper>

    <StickyBox>
      <Body>
        <List
          title="Who to follow"
          elements={[
            <FollowSuggestion
              name="Elon Musk"
              username="@elonmusk"
            />,
            <FollowSuggestion
              name="Jeff Bezos"
              username="@JeffBezos"
            />,
            <FollowSuggestion
              name="Bill Gates"
              username="@BillGates"
            />,
          ]}
        />

        <List
          title="What's happening"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />

        <List
          title="What's happening"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />

        <List
          title="What's happening"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />

        <List
          title="What's happening"
          elements={[
            <News />,
            <News />,
            <News />,
          ]}
        />
      </Body>
    </StickyBox>
  </Container>
);

export default SideBar;
