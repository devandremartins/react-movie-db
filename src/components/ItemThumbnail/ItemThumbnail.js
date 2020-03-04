import React from 'react';
import { ItemThumbnailStyled } from './ItemThumbnailStyled';

export const ItemThumbnail = ({ itemId, title, voteAverage, poster }) => {
  voteAverage = voteAverage + '';
  const dec = voteAverage.split('.')[1];
  const len = dec && dec.length > 1 ? dec.length : 1;
  const vote = Number(voteAverage).toFixed(len);

  return (
    <ItemThumbnailStyled>
      <div className="score">{vote}</div>
      <img src={poster} alt={title} />
      <h1>{title}</h1>
    </ItemThumbnailStyled>
  );
};
