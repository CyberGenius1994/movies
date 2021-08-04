import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledComments = styled.ul`
  padding: 0;
  list-style-type: none;
  max-width: 697px;
  .CommentItem {
    display: flex;
    justify-content: space-between;
  }
  button + button {
    margin-left: 15px;
  }
`;
