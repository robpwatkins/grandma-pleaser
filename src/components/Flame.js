import React, { useEffect, useState } from 'react';
import candle from '../img/CandlePlaceholder.png';

export default function Flame({ name, t, setPosition, currentTime, window }) {
  // const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (window) {
      if (currentTime > window[0] && currentTime < window[1]) {
        setIsActive(true);
      } else setIsActive(false);
    }
  }, [currentTime])

  let flameClass = [
    'flame',
    // isHovered && 'hovered',
    isActive && 'active'
  ];
  flameClass = flameClass.join(' ');
  
  return (
    <div
      style={isActive ? {transform: 'scale(1.15)'} : null}
      className='flame'
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setPosition(t);
        }
      }
    >
      <img src={candle} alt=""/>
      <h3>{name}</h3>
    </div>
  )
}