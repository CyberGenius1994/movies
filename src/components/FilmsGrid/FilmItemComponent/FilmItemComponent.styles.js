import styled from 'styled-components';
import { Card } from 'antd';

// eslint-disable-next-line import/prefer-default-export
export const StyledCard = styled(Card)`
  && {
    width: 100%;
    height: 100%;
  }
  .film-description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .film-image {
    width: 100%;
  }
  .film-title {
    margin-top: 15px;
  }
`;
