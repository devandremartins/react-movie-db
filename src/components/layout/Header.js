import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';

export const Header = () => (
  <HeaderStyled>
    <span className="logo">ReactMovieDB</span>{' '}
    <nav>
      <Link to="/">MOVIES</Link>
      {/*<Link to="/tv">SERIES</Link>*/}
    </nav>
  </HeaderStyled>
);
