import React, { Component } from 'react';
import { getFilms } from '../../services/films';
import FilmComponent from "../FilmComponent/FilmComponent";
import { Row, Col } from 'antd';
import { StyledFilms } from "./FilmsComponent.styles";

class FilmsComponent extends Component {
  state = {
    films: {
      movies: [],
    },

  };

   componentDidMount() {
    try {
      getFilms().then(data => {
        this.setState({ films: data.data });
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { films } = this.state;

    return (
      <>
        <StyledFilms className="Films">
          <Row className="FilmsList">
            {films && films.movies.map(itemInfo => {
              console.log(itemInfo);
              return (
                <Col key={itemInfo.id} span={6}>
                  <FilmComponent itemInfo={itemInfo} />
                </Col>
              )
            })}
          </Row>
        </StyledFilms>
      </>

    )
  }
}

export default FilmsComponent;