import React, { useState, useEffect, useCallback } from 'react';
import {
  API_URL,
  API_KEY,
  IMG_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from '../../config';
import { Cast } from './Cast';
import { ItemStyled } from './ItemStyled';

export const Item = props => {
  const itemId = props.match.params.itemId;
  let endpoint = `${API_URL}/movie/${itemId}?api_key=${API_KEY}`;
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const heroBg = {
    backgroundImage: `URL(${IMG_BASE_URL}/${BACKDROP_SIZE}${movie.backdrop_path})`
  };

  const fetchItem = useCallback(async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    setMovie(data);
    setGenres(data.genres);
  }, [endpoint]);

  const fetchItemCast = useCallback(async () => {
    const response = await fetch(
      `${API_URL}/movie/${itemId}/credits?api_key=${API_KEY}`
    );
    const data = await response.json();
    setMovieCast(data.cast);
  }, [itemId]);

  useEffect(() => {
    fetchItem();
    fetchItemCast();
  }, [fetchItem, fetchItemCast]);

  return (
    <ItemStyled>
      <div className="movie-hero" style={heroBg}>
        <h1>{movie.title}</h1>
      </div>
      <div className="movie-detail-wrapper">
        <div>
          <img
            src={`${IMG_BASE_URL}/${POSTER_SIZE}${movie.poster_path}`}
            alt={movie.title}
          />{' '}
        </div>
        <div>
          <p>{movie.overview}</p>
          <p>
            <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
              {movie.homepage}
            </a>
          </p>
          <p>{movie.release_date}</p>
          <p>{movie.runtime} minutes</p>
          <p>${movie.revenue}</p>
          <p>score -> {movie.vote_average}</p>
          <p>
            {genres && genres.map((item, index) => <span>{item.name} </span>)}
          </p>
          <div className="cast-list">
            {/*movieCast.map(item => (
          <Cast key={item.id} cast={item} />
        ))*/}
          </div>
        </div>
      </div>
    </ItemStyled>
  );
};
