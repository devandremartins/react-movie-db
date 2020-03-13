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
    console.log(`${API_URL}/search/${term}?api_key=${API_KEY}`);

    setEndpoint(`${API_URL}/search/movie?query=${term}&api_key=${API_KEY}`);
  };

  return (
    <MovieContext.Provider value={{ items, searchMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
