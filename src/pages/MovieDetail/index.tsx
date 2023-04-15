import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import routeMain from './routes';

import { useSelector } from 'react-redux';
import { selectList } from 'store/movies/selectors';

import { ID } from 'types/ID';
import { IMovieDetail } from 'types/IMovieDetail';

import './styles.scss';

const MovieDetail = () => {
  const star =  require("../../assets/img/star.png");
  const regex = /(<([^>]+)>)/ig;

  const { id } = useParams<ID>();
  const [movie, setMovies] = useState<IMovieDetail>();
  const moviesList = useSelector(selectList);

  useEffect(() => {
    const currentMovie = moviesList.find((item: IMovieDetail) => item.show.id == id);
    setMovies(currentMovie);
    
  }, [id, moviesList]);

  return (
    <section className='movieDetail'>
      {movie ? (
        <div className='movieDetailWrapper' id='id'>
          <div className='leftPart'>
            <img src={movie.show.image.original} alt={movie.show.image.original}/>
          </div>
          <div className='leftInfo'>
            <div className='topPart'> 
              <h2 className='name'>{movie.show.name}</h2>
              <img src={star} alt={star}/>
              <p className='star'>{movie.show.rating.average ? movie.show.rating.average : "8.0"}/10</p>
              </div>
              
            <div className='bottomPart'>
              <div className='bottomLeftPart'>
                  <p>ГОД ВЫХОДА:</p>
                  <p>СТРАНА:</p>
                  <p>ЖАНР:</p>
                  <p>ОПИСАНИЕ:</p>
                </div>
                <div className='bottomRihgtPart'>
                  <p className='year'>{movie.show.premiered ? movie.show.premiered.slice(0, 4) : '2014'}</p>
                  <p className='country'>{movie.show.network?.country?.name ? movie.show.network.country.name : "USA"}</p>
                  <p className='genres'>{movie.show.genres.join(", ")}</p>
                  <p className='information'>{movie.show.summary ? movie.show.summary.replace(regex, '') : "This is movie"}</p>
                </div>
            </div>
            </div>
        </div>
      ) : <></>}
    </section>
  )
}

export { routeMain };

export default MovieDetail;