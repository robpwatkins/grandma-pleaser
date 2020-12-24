import React, { useEffect, useState } from 'react';
import candle from '../img/CandlePlaceholder.png';

export default function Flame({ window, currentTime, setPosition, name }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (window) {
      if (currentTime > window[0] && currentTime < window[1]) {
        setIsActive(true);
      } else setIsActive(false);
    }
  }, [window, currentTime, setIsActive])
  
  return (
    <div
      style={isActive ? {transform: 'scale(1.15)'} : null}
      className='flame'
      onClick={() => window && setPosition(window[0])}
    >
      <img src={candle} alt=""/>
      <h3>{name}</h3>
    </div>
  )
}