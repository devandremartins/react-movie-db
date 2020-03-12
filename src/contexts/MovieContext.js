import React, { createContext } from 'react';
import { useFetch } from '../hooks/useFetch';

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const items = useFetch('/');
  console.log('->', items);
  return (
    <MovieContext.Provider value={items}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
