import React from 'react';
import { ItemThumbnailStyled } from './ItemThumbnailStyled';

export const ItemThumbnail = ({ itemId, title, poster }) => (
  <ItemThumbnailStyled>
    <div class="score">5.0</div>
    <img src={poster} alt={title} />
    <h1>{title}</h1>
  </ItemThumbnailStyled>
);
