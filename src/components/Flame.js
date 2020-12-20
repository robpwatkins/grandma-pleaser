import React, { useState } from 'react';

export default function Flame({ name }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  let flameClass = [
    'flame',
    isHovered && 'hovered',
    isClicked && 'clicked'
  ];
  flameClass = flameClass.join(' ');
  
  return (
    <div 
      className={flameClass}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <h3>{name}</h3>
    </div>
  )
}