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
    // console.log(getFilms().then((result) => result.data).then((data) => data));
    getFilms().then((data) => {
      this.setState({ films: data.data });
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { films } = this.state;

    console.log(films);

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
