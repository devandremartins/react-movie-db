import React, { useState, useEffect, createContext } from 'react';
import { API_URL, API_KEY } from '../config';

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [endpoint, setEndpoint] = useState(
    `${API_URL}/movie/popular?api_key=${API_KEY}`
  );
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setItems(data.results);
    };
    getItems();
  }, [endpoint]);

  const searchMovie = term => {
    setEndpoint(`${API_URL}/search/movie?query=${term}&api_key=${API_KEY}`);
  };

  const changeGenre = genre => {
    setEndpoint(
      `${API_URL}/discover/movie?with_genres=${genre}&api_key=${API_KEY}`
    );
  };

  const changeSort = sortOption => {
    setEndpoint(
      `${API_URL}/discover/movie?sort_by=${sortOption}&api_key=${API_KEY}`
    );
  };

  const loadMoreItems = () => {
    console.log('load More');
  };

  return (
    <MovieContext.Provider
      value={{ items, searchMovie, changeGenre, changeSort, loadMoreItems }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
