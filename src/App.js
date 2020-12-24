import { useState } from 'react';
import './App.css';
import Flame from './components/Flame';
import Video from './components/Video';

function App() {
  const [position, setPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className="App">
      <div className="group left">
        <Flame 
          name="Play from Start"
          setPosition={setPosition}
          currentTime={currentTime}
          window={[0, 4.99]}
        />
        <Flame 
          name="Katina" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[5, 9.99]}
        />
        <Flame 
          name="Kay & Gary" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[10, 14.99]}
        />
        <Flame 
          name="The Alexanders" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[15, 19.99]}
        />
      </div>
      <div className="group bottom">
        <Flame 
          name="The Lewises" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[20, 24.99]}
        />
        <Flame 
          name="James & Tricia" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[25, 29.99]}
        />
        <Flame 
          name="Al & Lea" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[30, 34.99]}
        />
      </div>
      <div className="group right">
        <Flame 
          name="Paul & Sallie" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[45, 49.99]}
        />
        <Flame 
          name="Rob & Eileen" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[40, 44.99]}
        />
        <Flame 
          name="The Irbys" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[35, 39.99]}
        />
        <a 
          href="https://drive.google.com/uc?export=download&id=1tTgmiGSspvrHj81QJ6I0BFnsF5RP85uj"
          target="_none"
        >
          <Flame 
            setPosition={setPosition} 
            name="Download" 
          />
        </a>
      </div>
      <div className="group top">
        <Flame 
          name="The Andersons" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[53, 53.99]}
        />
        <Flame 
          name="The Hernandezes" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[52, 52.99]}
        />
        <Flame 
          name="The Hewitts" 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[50, 51.99]}
        />
      </div>
      <div className="group middle">
        <Video 
          position={position} 
          setCurrentTime={setCurrentTime} 
        />
      </div>
    </div>
  );
}

export default App;
