import React from 'react';
import './css/sellers.css';

const Sellerscard = () => {

  const urlsellers = "https://github.com/GreiskelS/Assets.proyects/blob/main/assets/DSC08400.JPG?raw=true";

  return (
    <div className='sellers'>
      <a href='/' className='fontsellers'><img src={urlsellers} alt="foto sección 1" />Calendarios</a>
    </div>
  )
}

export default Sellerscard