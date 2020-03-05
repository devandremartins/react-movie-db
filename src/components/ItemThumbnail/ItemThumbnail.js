import React from 'react';
import { ItemThumbnailStyled } from './ItemThumbnailStyled';
import { Link } from 'react-router-dom';

export const ItemThumbnail = ({ itemId, title, voteAverage, poster }) => {
  voteAverage = voteAverage.toFixed(1);

  return (
    <Link to={`/${itemId}`}>
      <ItemThumbnailStyled>
        <div className="score">{voteAverage}</div>
        <img src={poster} alt={title} />
        <h1>{title}</h1>
      </ItemThumbnailStyled>
    </Link>
  );
};
