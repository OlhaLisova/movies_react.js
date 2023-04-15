import React, { useEffect } from 'react';
import routeMain from './routes';

import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from 'store/movies/actions';
import { selectList } from 'store/movies/selectors';

import MainMoviesList from 'components/MainMoviesList';


import './styles.scss';


const MainPage = () => {
  const dispatch = useDispatch();
  const moviesList = useSelector(selectList);

  useEffect(() => {
    dispatch(loadMovies() as any);
  }, [dispatch])


  return (
    <section className='mainPage'>
      <div className='title'>
        <h1> MOVIESinfo</h1>
        <h3>Самый популярный портал о фильмах</h3>
      </div>
      <div className='list'>
        {moviesList && moviesList.length > 0 && <MainMoviesList list={moviesList.slice(0, 8)} />}
      </div>
    </section>

  );
}

export { routeMain };

export default MainPage;

