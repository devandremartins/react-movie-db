import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBox } from './SearchBox';
import { HeaderStyled } from './HeaderStyled';

export const Header = () => (
  <HeaderStyled>
    <div>
      <span className="logo">ReactMovieDB</span>{' '}
      <nav>
        <Link to="/">MOVIES</Link>
        {/*<Link to="/tv">SERIES</Link>*/}
      </nav>
    </div>
    <div>
      <SearchBox />
    </div>
  </HeaderStyled>
);
