import React, { useState, useEffect, createContext } from 'react';
import { API_URL, API_KEY } from '../config';

export const MovieContext = createContext();

const MovieContextProvider = props => {
  const [endpoint, setEndpoint] = useState(
    `${API_URL}/movie/popular?api_key=${API_KEY}`
  );
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(endpoint);
      const data = await response.json();
      setItems([...items, ...data.results]);
    };
    getItems();
  }, [endpoint]);

  const searchMovie = term => {
    setItems([]);
    setEndpoint(`${API_URL}/search/movie?query=${term}&api_key=${API_KEY}`);
  };

  const changeGenre = genre => {
    setItems([]);
    setEndpoint(
      `${API_URL}/discover/movie?with_genres=${genre}&api_key=${API_KEY}`
    );
  };

  const changeSort = sortOption => {
    setItems([]);
    setEndpoint(
      `${API_URL}/discover/movie?sort_by=${sortOption}&api_key=${API_KEY}`
    );
  };

  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
    setEndpoint(endpoint + '&page=' + currentPage);
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
