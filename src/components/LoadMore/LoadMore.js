import React, { useContext } from 'react';
import { LoadMoreStyled } from './LoadMoreStyled';
import { MovieContext } from '../../contexts/MovieContext';

export const LoadMore = props => {
  const { loadMoreItems } = useContext(MovieContext);
  return <LoadMoreStyled onClick={loadMoreItems}>{props.text}</LoadMoreStyled>;
};
