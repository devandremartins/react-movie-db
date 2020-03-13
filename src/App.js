import React from 'react';
import Header from './components/layout/Header.js';
import { Main } from './components/layout/Main.js';
import { Item } from './components/Item/Item';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import MovieContextProvider from './contexts/MovieContext.js';

export const App = () => {
  return (
    <Router>
      <div className="App">
        <MovieContextProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/tv" component={Main} />
            <Route exact path="/:itemId" component={Item} />
          </Switch>
        </MovieContextProvider>
      </div>
    </Router>
  );
};
