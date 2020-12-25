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
        src="https://player.vimeo.com/external/494571538.sd.mp4?s=effffcec64932e0801bcf4772bf5b4631cde259c&profile_id=164"
        ref={vidRef}
        onTimeUpdate={() => setCurrentTime(vidRef.current.currentTime)}
      >
      </video>
    </div>
  )
}