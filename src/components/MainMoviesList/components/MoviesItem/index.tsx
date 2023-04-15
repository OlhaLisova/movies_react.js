import React from "react";
import './styles.scss';

import { NavLink } from "react-router-dom";
import { routeMain as routeMovieDetail } from 'pages/MovieDetail';

import { IMovieDetail } from "types/IMovieDetail";

interface IMovieItemParams {
   item: IMovieDetail
}

const MoviesItem: React.FC<IMovieItemParams> = ({ item }) => {
   const premieredYear = item.show.premiered ? item.show.premiered.slice(0, 4) : null;
   const countryName = item.show.network && item.show.network.country ? item.show.network.country.name : null;
   const genres = item.show.genres.map((genre, index) => {
      if (index === 0) {
         return genre;
      }
      return genre.charAt(0).toLowerCase() + genre.slice(1);
   }).join(", ");

   return(
   <NavLink className="moviesItem" to={routeMovieDetail(item.show.id)}>
      <div className="image">
         <img src={item.show.image.original} alt={item.show.image.original}/>
      </div>
      <div className="name">
         {item.show.name}
      </div>
      <div className="data">
         <p>{premieredYear ? premieredYear : '2014'}</p>
         <p>({countryName ? countryName : 'USA'})</p>
      </div>
      <div className="genres">
         {genres}
      </div>
   </NavLink>
   )
}

export default MoviesItem;