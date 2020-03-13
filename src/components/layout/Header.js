import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import { HeaderStyled } from './HeaderStyled';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { MovieContext } from '../../contexts/MovieContext';

export const Header = () => {
  const { changeGenre } = useContext(MovieContext);
  const options = [
    { value: 28, label: 'Action' },
    { value: 12, label: 'Adventure' }
  ];
  const handleChangeGenre = e => {
    changeGenre(e.value);
  };
  return (
    <HeaderStyled>
      <div>
        <span className="logo">
          <Link to="/">ReactMovieDB</Link>
        </span>
        <nav>
          <Dropdown
            options={options}
            onChange={handleChangeGenre}
            placeholder={'Select a Genre'}
          />
          {/*<Link to="/">MOVIES</Link>*/}
          {/*<Link to="/tv">SERIES</Link>*/}
        </nav>
      </div>
      <div>
        <SearchBox />
      </div>
    </HeaderStyled>
  );
};
