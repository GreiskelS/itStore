import React from 'react';
import './css/Sellers.css';
import {urlsellers} from '../Assets/Assets';

const Sellerscard = () => {
  
  return (
    <div className='sellers'>
      <a href='/' className='fontsellers'><img src={ urlsellers } alt="foto" />Calendarios</a>
    </div>
  )
}
export default Sellerscard