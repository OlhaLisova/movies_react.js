import React from "react";
import './styles.scss';

import { NavLink } from "react-router-dom";
import { routeMain as routeMovieDetail } from 'pages/MovieDetail';

import { IMovieDetail } from "types/IMovieDetail";

interface IMovieItemParams {
   item: IMovieDetail
}


const MoviesItem: React.FC<IMovieItemParams> = ({ item }) => {
   const genres = item.show.genres.map((genre, index) => {
      if (index === 0) {
         return genre;
      }
      return genre.charAt(0).toLowerCase() + genre.slice(1);
   }).join(", ");

   return <NavLink className="moviesItemPage" to={routeMovieDetail(item.show.id)}>
      <div className="imagePage">
         <img src={item.show.image.original} alt={item.show.image.original}/>
      </div>
      <div className="namePage">
         <h1>{item.show.name}</h1>
         <br/>
         <h2>{genres}</h2>
      </div>
   </NavLink>
}

export default MoviesItem;





