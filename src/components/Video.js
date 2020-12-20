import React from 'react';

export default function Video() {
  return (
    <div className="video-container">
      <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/WSM8GcShChk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}