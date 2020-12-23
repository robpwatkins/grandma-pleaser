import React from 'react';
// import Vid from '../video/GrandmaPleaser2020(Unfinished).mov';

export default function Video() {
  return (
    <div className="video-test">
      <video 
        controls
        autoPlay
        loop
        // src={Vid}
        onTimeUpdate={event => console.log(event)}
      >  
      </video>
    </div>
  )
}