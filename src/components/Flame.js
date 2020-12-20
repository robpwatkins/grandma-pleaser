import React, { useState } from 'react';

export default function Flame({ name }) {
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <div 
      className={isClicked ? "flame clicked" : "flame"}
      onClick={() => setIsClicked(!isClicked)}
    >
      <h3>{name}</h3>
    </div>
  )
}