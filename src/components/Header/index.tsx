import React from 'react';

import { NavLink } from 'react-router-dom';

import { routeMain as routeMainPage } from 'pages/MainPage';
import { routeMain as routeMoviesListsPage } from 'pages/MoviesListsPage';
import { routeMain as routeInfo } from 'pages/Info';
import { routeMain as routeSearch } from 'pages/Search';

import './styles.scss';


const Header = () => {
  const Foto = require("../../assets/img/logo.png")
  return (
    <header className="mainHeader">
      <img src={Foto} alt={Foto} />
      <nav>
        <NavLink to={routeMainPage()} activeClassName={'linkActive'}>
          Главная
        </NavLink>
        <NavLink to={routeMoviesListsPage()} activeClassName={'linkActive'}>
          Фильмы по категории
        </NavLink>
        <NavLink to={routeInfo()} activeClassName={'linkActive'}>
          О нас
        </NavLink>
        <NavLink to={routeSearch()} activeClassName={'linkActive'}>
          Поиск
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;