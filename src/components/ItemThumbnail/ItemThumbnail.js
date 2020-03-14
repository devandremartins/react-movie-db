import React from 'react';
import { ItemThumbnailStyled } from './ItemThumbnailStyled';
import { Link } from 'react-router-dom';
import { FavouriteIcon } from '../FavouriteIcon/FavouriteIcon';

export const ItemThumbnail = ({ itemId, title, voteAverage, poster }) => {
  voteAverage = voteAverage.toFixed(1);

  return (
    <ItemThumbnailStyled>
      <div className="score">{voteAverage}</div>
      <Link to={`/${itemId}`}>
        {poster.endsWith(null) ? (
          <img src="/images/image-not-found-500-750.jpg" alt={title} />
        ) : (
          <img src={poster} alt={title} />
        )}
      </Link>
      <h1>{title}</h1>
      <FavouriteIcon />
    </ItemThumbnailStyled>
  );
};
