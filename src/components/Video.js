import React, { useEffect } from 'react';

export default function Video( {time} ) {
  
  return (
    <div className="video-container">
      <iframe 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/uKZkclNewFM?rel=0&start=${time}`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      >
      </iframe>
    </div>
  )
}