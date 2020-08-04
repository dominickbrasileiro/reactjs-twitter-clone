import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > span {
    color: var(--gray);

    margin-bottom: 3px;
  }
`;
