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
        <Flame 
          name="Play from Start"
          t={0.001}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[0, 4.99]}
        />
        <Flame 
          name="Katina" 
          t={5} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[5, 9.99]}
        />
        <Flame 
          name="Kay & Gary" 
          t={10} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[10, 14.99]}
        />
        <Flame 
          name="The Alexanders" 
          t={15} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[15, 19.99]}
        />
      </div>
      <div className="group bottom">
        <Flame 
          name="The Lewises" 
          t={20} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[20, 24.99]}
        />
        <Flame 
          name="James & Tricia" 
          t={25} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[25, 29.99]}
        />
        <Flame 
          name="Al & Lea" 
          t={30} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[30, 34.99]}
        />
      </div>
      <div className="group right">
        <Flame 
          name="Paul & Sallie" 
          t={45} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[45, 49.99]}
        />
        <Flame 
          name="Rob & Eileen" 
          t={40} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[40, 44.99]}
        />
        <Flame 
          name="The Irbys" 
          t={35} 
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
            name="Download From Google Drive" 
          />
        </a>
      </div>
      <div className="group top">
        <Flame 
          name="The Andersons" 
          t={53} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[53, 53.99]}
        />
        <Flame 
          name="The Hernandezes" 
          t={52} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[52, 52.99]}
        />
        <Flame 
          name="The Hewitts" 
          t={50} 
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
