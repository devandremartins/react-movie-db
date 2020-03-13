import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import { HeaderStyled } from './HeaderStyled';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const Header = () => {
  const options = [
    { value: 1, label: 'one' },
    { value: 1, label: 'tro' }
  ];
  const changeCategory = () => {};
  return (
    <HeaderStyled>
      <div>
        <span className="logo">
          <Link to="/">ReactMovieDB</Link>
        </span>
        <nav>
          <Dropdown
            options={options}
            onChange={changeCategory}
            placeholder={'Select a Category'}
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
