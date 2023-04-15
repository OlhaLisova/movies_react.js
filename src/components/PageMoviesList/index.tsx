import React from "react";

import './styles.scss';

import MoviesItem from "./components/MoviesItem";

import { IMovieDetail } from "types/IMovieDetail";


interface IMovieListParams {
   list: IMovieDetail[];
}

const MoviesList: React.FC<IMovieListParams> = ({ list }) => (
   <div className="moviesList">
      {list.map((movies: IMovieDetail) => (
         <MoviesItem key={movies.show.id} item={movies} />
      ))}
   </div>
)

export default MoviesList;