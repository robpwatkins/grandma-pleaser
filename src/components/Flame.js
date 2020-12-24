import React, { useState } from 'react';
import candle from '../img/CandlePlaceholder.png';

export default function Flame({ name, t, setTime }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let flameClass = [
    'flame',
    isHovered && 'hovered',
    isActive && 'active'
  ];
  flameClass = flameClass.join(' ');
  
  return (
    <div 
      className={flameClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setIsActive(!isActive)
        setTime(t);
        }
      }
    >
      <img src={candle} alt=""/>
      <h3>{name}</h3>
    </div>
  )
}