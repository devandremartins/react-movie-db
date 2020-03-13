import React, { useContext } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { MovieContext } from '../../contexts/MovieContext';

export const SearchBox = () => {
  const { searchMovie } = useContext(MovieContext);

  const handleSearch = e => {
    if (e.key === 'Enter' && e.target.value !== '') {
      searchMovie(e.target.value);
    }
  };

  return (
    <div id="SearchBox">
      <input
        type="text"
        placeholder="search for a movie..."
        className="search-box"
        onKeyPress={handleSearch}
      />
    </div>
  );
};
