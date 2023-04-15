import React from 'react';
import routeMain from './routes';


import './styles.scss';


const Info = () => {
  const Foto =  require("../../assets/img/info.png")
  return (
      <div className='info'>
        <div className='img'>
          <img src={Foto} alt={Foto}/>
        </div>
        <div className='text'>
          <h1>MOVIESinfo</h1>
          <br/>
          <p>Поиск фильмов, новости кино, отзывы пользователей, 
            афиша кинотеатров, фотографии, постеры, трейлеры, кассовые сборы и многое другое.</p>
        </div>
      </div>
  )
}

export {routeMain};

export default Info;