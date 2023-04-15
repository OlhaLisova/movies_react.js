import React, { useState, useEffect } from 'react';
import routeMain from './routes';

import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from 'store/movies/actions';
import { selectList } from 'store/movies/selectors';

import PageMoviesList from 'components/PageMoviesList';
import './styles.scss';

const MoviesListsPage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadMovies() as any);
  }, [dispatch])


  return (
    <div className='moviesListsPage'>
      <div className='titleList'>
        <h2> Выбранная категория: <span>Girls</span></h2>
      </div>
      <div className='bodyList'>
        {moviesList.length > 0 && <PageMoviesList list={moviesList} />}
      </div>
    
    </div>
  );
}

export { routeMain };

export default MoviesListsPage;