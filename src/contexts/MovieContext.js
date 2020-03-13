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
    console.log('ID ->', genre);
    //https:discover/movie?api_key=b8c00b34d7e9f2264d5bc2923d2d2ef1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28
    setEndpoint(
      `${API_URL}/discover/movie?with_genres=${genre}&api_key=${API_KEY}`
    );
  };

  return (
    <MovieContext.Provider value={{ items, searchMovie, changeGenre }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
