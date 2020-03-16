import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import { HeaderStyled } from './HeaderStyled';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { MovieContext } from '../../contexts/MovieContext';
import { withRouter } from 'react-router-dom';
import { genresData } from '../../contexts/genresData';

const Header = props => {
  const { changeGenre, changeSort } = useContext(MovieContext);
  const genres = genresData;

  const sortOptions = [
    { value: 'popularity.desc', label: 'Popularity' },
    { value: 'vote_average.desc', label: 'Rating' },
    { value: 'release_date.desc', label: 'Release Date' }
  ];
  const handleChangeGenre = e => {
    changeGenre(e.value);
    props.history.push('/');
  };
  const handleChangeSort = e => {
    changeSort(e.value);
    props.history.push('/');
  };
  return (
    <HeaderStyled>
      <div className="logo">
        <Link to="/">ReactMovieDB</Link>
      </div>
      <div className="filters">
        <Dropdown
          className="filter"
          options={genres}
          onChange={handleChangeGenre}
          placeholder={'Select a Genre'}
        />
        <Dropdown
          className="filter"
          options={sortOptions}
          onChange={handleChangeSort}
          placeholder={'Sort by'}
        />
      </div>
      <div>
        <SearchBox />
      </div>
    </HeaderStyled>
  );
};

export default withRouter(Header);
