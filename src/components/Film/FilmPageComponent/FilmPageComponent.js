import React, { Component } from 'react';
import {
  Row, Col, Image, Typography,
} from 'antd';
import { StyledFilmPage } from './FilmPageComponent.styled';
import { getFilm } from '../../../services/film';
import CommentForm from '../CommentForm/CommentForm';

const { Title, Paragraph, Text } = Typography;

class FilmPageComponent extends Component {
  state = {
    filmInfo: {},
  };

  componentDidMount() {
    const filmId = document.location.pathname.substring(document.location.pathname.length - 5);

    try {
      getFilm(filmId).then((data) => {
        this.setState({ filmInfo: data.data.movie });
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { filmInfo } = this.state;
    console.log(filmInfo);
    return (
      <StyledFilmPage>
        <div className="Container">
          <Row gutter={16} className="FilmPage">
            <Col span={6}>
              <Image src={filmInfo.large_cover_image} />
            </Col>
            <Col span={18} className="FilmInfo">
              <Title>
                {filmInfo.title}
              </Title>
              <Paragraph>
                {filmInfo.description_full}
              </Paragraph>
              <Paragraph>
                <Text strong>IMDB:</Text>
                {filmInfo.rating}
              </Paragraph>
              <Paragraph>
                <Text strong>Comments:</Text>
              </Paragraph>
              <CommentForm />
            </Col>
          </Row>
        </div>
      </StyledFilmPage>
    );
  }
}

export default FilmPageComponent;
