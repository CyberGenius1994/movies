import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { StyledCard } from './FilmItemComponent.styles';

const { Title, Paragraph, Text } = Typography;

function FilmItemComponent(props) {
  const { itemInfo } = props;

  return (
    <StyledCard className="film-item" hoverable>
      <div className="film-image-wrapper">
        <img className="film-image" src={itemInfo.medium_cover_image} alt={itemInfo.title} />
      </div>
      <div className="film-info">
        <Title level={4} className="FilmTitle">
          <NavLink to={`/film/${itemInfo.id}`}>{itemInfo.title}</NavLink>
        </Title>
        <Paragraph className="film-description">
          {itemInfo.description_full ? itemInfo.description_full : 'No description'}
        </Paragraph>
        <Paragraph className="film-genres">
          <Text strong>Genres:&nbsp;</Text>
          {itemInfo.genres.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Text key={index} className="film-genre">
              {index < itemInfo.genres.length - 1 ? `${item}, ` : `${item}.`}
            </Text>
          ))}
        </Paragraph>
        <Paragraph className="film-rating">
          <Text strong>IMDB:&nbsp;</Text>
          {itemInfo.rating}
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
