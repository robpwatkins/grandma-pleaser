import React, { useEffect, useRef } from 'react';

export default function Video( {position, setCurrentTime} ) {
  const vidRef = useRef();
  
  useEffect(() => {
    vidRef.current.currentTime = position;
    vidRef.current.play();
  }, [position])

  return (
    <div className="video-container">
      <video 
        controls 
        autoPlay
        src="https://player.vimeo.com/external/494483863.sd.mp4?s=068af5fc408b83ad576296cb9c7fc562f67392b3&profile_id=165"
        ref={vidRef}
        onTimeUpdate={() => setCurrentTime(vidRef.current.currentTime)}
      >
      </video>
    </div>
  )
}