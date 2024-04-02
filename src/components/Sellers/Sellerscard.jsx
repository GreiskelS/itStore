import React, { useState } from 'react';
import './css/sellers.css';
import Links from '../FetchLink/Links';

const Sellerscard = () => {

  const sellers1 = Links({ sellers: 1 });

  return (
    <div className='sellers'>
      <a href='/' className='fontsellers'>{sellers1}Calendarios</a>
    </div>
  )
}

export default Sellerscard