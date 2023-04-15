import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import MainPage, { routeMain as routeMainPage } from 'pages/MainPage';
import MoviesListsPage, { routeMain as routeMoviesListsPage } from 'pages/MoviesListsPage';
import MovieDetail, { routeMain as routeMovieDetail } from 'pages/MovieDetail';
import Info, { routeMain as routeInfo } from 'pages/Info';
import Search, { routeMain as routeSearch } from 'pages/Search';

import Header from '../Header';
import Footer from '../Footer';

import './styles.scss';


const AppContent = () => {
  return (
    <div className="mainWrapper">
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage} />
          <Route exact path={routeMoviesListsPage()} component={MoviesListsPage} />
          <Route exact path={routeMovieDetail()} component={MovieDetail} />
          <Route exact path={routeInfo()} component={Info} />
          <Route exact path={routeSearch()} component={Search} />
          <Redirect
            to={{
              pathname: routeMainPage()
            }}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default AppContent;