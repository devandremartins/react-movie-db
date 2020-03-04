import React, { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY, IMG_BASE_URL, BACKDROP_SIZE } from '../config';
import { Cast } from './Cast';

export const Item = props => {
  const itemId = props.match.params.itemId;
  let endpoint = `${API_URL}/movie/${itemId}?api_key=${API_KEY}`;
  const [movie, setMovie] = useState([]);
  const [movieCast, setMovieCast] = useState([]);

  const fetchItem = useCallback(async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    setMovie(data);
  }, [endpoint]);

  const fetchItemCast = useCallback(async () => {
    const response = await fetch(
      `${API_URL}/movie/${itemId}/credits?api_key=${API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    setMovieCast(data.cast);
  }, [itemId]);

  useEffect(() => {
    fetchItem();
    fetchItemCast();
  }, [fetchItem, fetchItemCast]);

  return (
    <div>
      <img
        src={`${IMG_BASE_URL}/${BACKDROP_SIZE}${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <div className="cast-list">
        {movieCast.map(item => (
          <Cast key={item.id} cast={item} />
        ))}
      </div>
    </div>
  );
};
