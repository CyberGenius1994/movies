import styled from "styled-components";
import {Card} from "antd";

export const StyledCard = styled(Card)`
  && { width: 100% }
  .FilmDescription {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .FilmImage {
    width: 100%;
  }
  .FilmTitle {
    margin-top: 15px;
  }
`