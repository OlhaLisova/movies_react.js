import React, { useState, useEffect } from 'react';
import routeMain from './routes';

import { useDispatch, useSelector } from 'react-redux';
import { loadSearch } from 'store/kategories/actions';
import { loadMovies } from 'store/movies/actions';
import { selectList } from 'store/movies/selectors';

import PageMoviesList from 'components/PageMoviesList';
import { IMovieDetail } from 'types/IMovieDetail';
import { TypedDispatch } from 'types/dispatch';
import './styles.scss';

const Search = () => {
   const searchIcon = require('../../assets/img/search.png');
   const dispatch = useDispatch<TypedDispatch>();
   const moviesList = useSelector(selectList);

   const [value, setValue] = useState('');
   const [searchMovies, setSearchMovies] = useState<IMovieDetail[]>([]);
   
   useEffect(() => {
      dispatch(loadMovies());
      dispatch(loadSearch(value));
   }, [dispatch, value])
   
   const handleSearch = () => {
      const searchKategories = moviesList.filter((item) => item.show.name.toLowerCase().includes(value.toLowerCase()));
      setSearchMovies(searchKategories.slice(0, 2));
   };

   return (
      <div className='searchWrapper'>
         <div className='titleSearch'>
            <h2> Поиск по категории </h2>
         </div>
         <div className='search'>
            <input 
               type='search' 
               placeholder='example: Girls'
               value={value}
               onChange={(event) => setValue(event.target.value)}
            />
            <button onClick={handleSearch}><img src={searchIcon} alt={searchIcon} /></button>
         </div>
         <div className="resultSearch">
         <h3>Результаты поиска:</h3>
         {value ? (
            searchMovies.length > 0 ? (
               <PageMoviesList list={searchMovies} />
            ) : (
               <h4>Результатов нет, попробуйте что-то другое</h4>
            )
               ) : (
               <h4>Введите поисковой запрос <br/> для отображения результатов</h4>
            )}
         </div>
      </div>
   );
};

export { routeMain };

export default Search;



