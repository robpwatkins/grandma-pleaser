import React, { useEffect, useState } from 'react';
import candle from '../img/CandlePlaceholder.png';

export default function Flame({ name, t, setPosition, currentTime, window }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window) {
      if (currentTime > window[0] && currentTime < window[1]) {
        setIsActive(true);
      } else setIsActive(false);
    }
  })
  
  return (
    <div
      style={isActive ? {transform: 'scale(1.15)'} : null}
      className='flame'
      onClick={() => {
        t && setPosition(t);
        }
      }
    >
      <img src={candle} alt=""/>
      <h3>{name}</h3>
    </div>
  )
}