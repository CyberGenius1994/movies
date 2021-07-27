import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
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
    visible: false,
  };

  componentDidMount() {
    const { match } = this.props;
    const filmId = match.params.id;

    getFilm(filmId).then((data) => {
      this.setState({ filmInfo: data.data.movie });
    }).catch((error) => {
      console.error(error);
    });
  }

  setVisible = (visible) => {
    this.setState({ visible });
  }

  render() {
    const { filmInfo, visible } = this.state;
    const { match } = this.props;
    const { id: filmId } = match.params;

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
              <CommentForm visible={visible} setVisible={this.setVisible} filmId={filmId} />
            </Col>
          </Row>
        </div>
      </StyledFilmPage>
    );
  }
}

const FilmPageComponentWithRouter = withRouter(FilmPageComponent);

FilmPageComponent.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

FilmPageComponent.defaultProps = {
  match: {},
};

export default FilmPageComponentWithRouter;
