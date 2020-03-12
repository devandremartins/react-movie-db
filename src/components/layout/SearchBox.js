import React from 'react';
import { useFetch } from '../../hooks/useFetch';

export const SearchBox = () => {
  const handleSearch = e => {
    if (e.key === 'Enter') {
      const term = e.target.value;
      console.log('->', term);
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
