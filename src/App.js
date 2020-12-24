import { useState } from 'react';
import './App.css';
import Flame from './components/Flame';
import Video from './components/Video';

function App() {
  const [position, setPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  console.log(currentTime);
  return (
    <div className="App">
      <div className="group left">
        <Flame setPosition={setPosition} t={0.001} name="Play from Start" />
        <Flame setPosition={setPosition} t={5} name="Katina" />
        <Flame setPosition={setPosition} t={25} name="Kay & Gary" />
        <Flame setPosition={setPosition} t={45} name="The Alexanders" />
      </div>
      <div className="group bottom">
        <Flame setPosition={setPosition} name="The Lewises" />
        <Flame setPosition={setPosition} name="James & Tricia" />
        <Flame setPosition={setPosition} name="Al & Lea" />
      </div>
      <div className="group right">
        <Flame setPosition={setPosition} name="Paul & Sallie" />
        <Flame setPosition={setPosition} name="Rob & Eileen" />
        <Flame setPosition={setPosition} name="The Irbys" />
        <a 
          href="https://drive.google.com/uc?export=download&id=1tTgmiGSspvrHj81QJ6I0BFnsF5RP85uj"
          target="_none"
        >
          <Flame setPosition={setPosition} name="Download From Google Drive" />
        </a>
      </div>
      <div className="group top">
        <Flame setPosition={setPosition} name="The Andersons" />
        <Flame setPosition={setPosition} name="The Hernandezes" />
        <Flame setPosition={setPosition} name="The Hewitts" />
      </div>
      <div className="group middle">
        <Video position={position} setCurrentTime={setCurrentTime} />
      </div>
    </div>
  );
}

export default App;
