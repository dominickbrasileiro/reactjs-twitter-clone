import React from 'react';
import {
  Container,
  Retweeted,
  RetweetedIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => (
  <Container>
    <Retweeted>
      <RetweetedIcon />
      You Retweeted
    </Retweeted>

    <Body>
      <Avatar />

      <Content>
        <Header>
          <strong>Dominick Brasileiro</strong>
          <span>@dominickjs</span>

          <Dot />

          <time>Aug 2</time>
        </Header>

        <Description>
          Give me a job pls
        </Description>

        <ImageContent />

        <Icons>
          <Status>
            <CommentIcon />
            42
          </Status>

          <Status>
            <RetweetIcon />
            16
          </Status>

          <Status>
            <LikeIcon />
            2K
          </Status>
        </Icons>
      </Content>
    </Body>
  </Container>
);

export default Tweet;
