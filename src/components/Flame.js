import React, { useEffect, useState } from 'react';
import candle from '../img/candleFinal.png';
import banner from '../img/banner.png';

export default function Flame({ window, currentTime, setPosition, placard }) {
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
      className={isActive ? 'flame active' : 'flame'}
      onClick={() => window && setPosition(window[0])}
    >
      <img className="candle" src={candle} alt=""/>
      <img className="banner" src={banner} alt=""/>
      <img className="placard" src={placard} alt=""/>
    </div>
  )
}