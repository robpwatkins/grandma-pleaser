import React, { useEffect } from 'react';
import Vid from '../video/JohnMelTeddyJosephine.mp4';
// import Vid from '../video/GrandmaPleaser2020(Unfinished).mov';


export default function Video( {time} ) {
  
  return (
    <div className="video-container">
      <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/uKZkclNewFM?rel=0&&autoplay=1&start=${time}`} 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="true"
      >
      </iframe>
    </div>
  )
}