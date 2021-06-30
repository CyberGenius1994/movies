import React, { Component } from 'react';
import {StyledCard} from "./FilmComponent.styles";
import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

class FilmComponent extends Component {
  render() {
    const {itemInfo} = this.props;

    return (
      <StyledCard className="FilmItem" hoverable={true}>
        <div className="ImageWrapper">
          <img className="FilmImage" src={itemInfo.medium_cover_image} alt={itemInfo.title}/>
        </div>
        <div className="FilmInfo">
          <Title level={4} className="FilmTitle">
            <Link href={itemInfo.url}>{itemInfo.title}</Link>
          </Title>
          <Paragraph className="FilmDescription">
            {itemInfo.description_full ? itemInfo.description_full : 'No description'}
          </Paragraph>
          <Text className="FilmGenres">
            Genres:
            {itemInfo.genres.map((it, i) => (
              i < itemInfo.genres.length - 1
                ? <Text key={i} className="FilmGenre">{it}, </Text>
                : <Text key={i} className="FilmGenre">{it}.</Text>
            ))}
          </Text>
          <Paragraph className="FilmRating">IMDB: {itemInfo.rating}</Paragraph>
        </div>
      </StyledCard>
    )
  }
}

export default FilmComponent;