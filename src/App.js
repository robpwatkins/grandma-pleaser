import { useState } from 'react';
import './App.css';
import Flame from './components/Flame';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <div className="group left">
        <Flame name="Play from Start" />
        <Flame name="Katina" />
        <Flame name="Kay & Gary" />
        <Flame name="The Alexanders" />
      </div>
      <div className="group bottom">
        <Flame name="The Lewises" />
        <Flame name="James & Tricia" />
        <Flame name="Al & Lea" />
      </div>
      <div className="group right">
        <Flame name="Paul & Sallie" />
        <Flame name="Rob & Eileen" />
        <Flame name="The Irbys" />
        <Flame name="Download Video" />
      </div>
      <div className="group top">
        <Flame name="The Andersons" />
        <Flame name="The Hernandezes" />
        <Flame name="The Hewitts" />
      </div>
      <div className="group middle">
        <Video />
      </div>
    </div>
  );
}

export default App;
