import React from 'react';

import './styles.scss';


const Footer = () => {
  const Foto =  require("../../assets/img/logo.png")
  return (
    <footer className="mainFooter">
        <div>
        <img src={Foto} alt={Foto}/>
        </div>
        <div>Дипломный проект</div>
        <div>
          <div className='small'>Made by</div>
          Olga Lisova
        </div>
    </footer>
  );
}

export default Footer;