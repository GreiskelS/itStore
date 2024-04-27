import React from 'react';
import './css/sellers.css';
import {urlsellers} from '../Assets/Assets';

const Sellerscard = () => {
  
  return (
    <div className='sellers'>
      <a href='/' className='fontsellers'><img src={ urlsellers } alt="foto" />Calendarios</a>
    </div>
  )
}
export default Sellerscard