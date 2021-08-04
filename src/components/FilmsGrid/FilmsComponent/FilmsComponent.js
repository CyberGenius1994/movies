import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { getFilms } from '../../../services/films';
import FilmComponent from '../FilmItemComponent/FilmItemComponent';
import { StyledFilms } from './FilmsComponent.styles';

class page extends Component {
  state = {
    films: {
      movies: [],
    },
  };

  componentDidMount() {
    getFilms().then(({ data: { data = {} } = {} } = {}) => {
      this.setState({ films: data });
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { films } = this.state;

    return (
      <>
        <StyledFilms className="Films">
          <Row gutter={[16, 16]} className="FilmsList">
            {films?.movies?.map((itemInfo) => (
              <Col key={itemInfo.id} span={6}>
                <FilmComponent itemInfo={itemInfo} />
              </Col>
            ))}
          </Row>
        </StyledFilms>
      </>

    );
  }
}

export default page;
