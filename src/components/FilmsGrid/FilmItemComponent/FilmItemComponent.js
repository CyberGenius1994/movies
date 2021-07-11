import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { StyledCard } from './FilmItemComponent.styles';

const { Title, Paragraph, Text } = Typography;

function FilmItemComponent(props) {
  const { itemInfo } = props;

  return (
    <StyledCard className="FilmItem" hoverable>
      <div className="ImageWrapper">
        <img className="FilmImage" src={itemInfo.medium_cover_image} alt={itemInfo.title} />
      </div>
      <div className="FilmInfo">
        <Title level={4} className="FilmTitle">
          <NavLink to={`/film/${itemInfo.id}`}>{itemInfo.title}</NavLink>
        </Title>
        <Paragraph className="FilmDescription">
          {itemInfo.description_full ? itemInfo.description_full : 'No description'}
        </Paragraph>
        <Paragraph className="FilmGenres">
          <Text strong>Genres:&nbsp;</Text>
          {itemInfo.genres.map((it, i) => (
            i < itemInfo.genres.length - 1
              ? (
                <Text key={Math.random()} className="FilmGenre">
                  {it}
                  ,
                  {' '}
                </Text>
              )
              : (
                <Text key={Math.random()} className="FilmGenre">
                  {it}
                  .
                </Text>
              )
          ))}
        </Paragraph>
        <Paragraph className="FilmRating">
          <Text strong>IMDB:</Text>
          {itemInfo.rating}
        </Paragraph>
      </div>
    </StyledCard>
  );
}

FilmItemComponent.propTypes = {
  itemInfo: PropTypes.string.isRequired,
};

export default FilmItemComponent;
