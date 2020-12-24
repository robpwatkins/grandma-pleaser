import React, { useEffect } from 'react';

export default function Video( {time} ) {

  console.log(time);
  return (
    <div className="video-container">
      <iframe 
        src={`http://player.vimeo.com/video/494305872?autoplay=1&#t=${time}s`} 
        width="640" 
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      >
      </iframe>
    </div>
  )
}