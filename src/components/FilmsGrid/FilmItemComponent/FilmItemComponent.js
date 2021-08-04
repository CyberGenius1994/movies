import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { StyledCard } from './FilmItemComponent.styles';

const { Title, Paragraph, Text } = Typography;

function FilmItemComponent(props) {
  const {
    itemInfo: {
      title = {},
      medium_cover_image: cover = {},
      description_full: description = {},
      rating = {},
      id = {},
      genres = {},
    } = {},
  } = props;

  return (
    <StyledCard className="film-item" hoverable>
      <div className="film-image-wrapper">
        <img className="film-image" src={cover} alt={title} />
      </div>
      <div className="film-info">
        <Title level={4} className="FilmTitle">
          <NavLink to={`/film/${id}`}>{title}</NavLink>
        </Title>
        <Paragraph className="film-description">
          {description || 'No description'}
        </Paragraph>
        <Paragraph className="film-genres">
          <Text strong>Genres:&nbsp;</Text>
          {genres.map((item, index) => (
            <Text key={item} className="film-genre">
              {index < genres.length - 1 ? `${item}, ` : `${item}.`}
            </Text>
          ))}
        </Paragraph>
        <Paragraph className="film-rating">
          <Text strong>IMDB:&nbsp;</Text>
          {rating}
        </Paragraph>
      </div>
    </StyledCard>
  );
}

FilmItemComponent.propTypes = {
  itemInfo: PropTypes.objectOf(PropTypes.any),
};

FilmItemComponent.defaultProps = {
  itemInfo: {},
};

export default FilmItemComponent;
