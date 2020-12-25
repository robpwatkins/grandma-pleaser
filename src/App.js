import { useState } from 'react';
import './App.css';
import Flame from './components/Flame';
import Video from './components/Video';
import katina from './img/katina.png';
import kayGary from './img/kayGary.png';
import theAlexanders from './img/theAlexanders.png';
import theLewises from './img/theLewises.png';
import jamesTricia from './img/jamesTricia.png';
import alLea from './img/alLea.png';
import theIrbys from './img/theIrbys.png';
import robEileen from './img/robEileen.png';
import paulSallie from './img/paulSallie.png';
import theHewitts from './img/theHewitts.png';
import theHernandezes from './img/theHernandezes.png';
import theAndersons from './img/theAndersons.png';

function App() {
  const [position, setPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <div className="App">
      <div className="group left">
        <Flame 
          name="Play from start"
          setPosition={setPosition}
          currentTime={currentTime}
          window={[0, 4.99]}
        />
        <Flame 
          name={katina} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[5, 9.99]}
        />
        <Flame 
          name={kayGary}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[10, 14.99]}
        />
        <Flame 
          name={theAlexanders}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[15, 19.99]}
        />
      </div>
      <div className="group bottom">
        <Flame 
          name={theLewises}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[20, 24.99]}
        />
        <Flame 
          name={jamesTricia} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[25, 29.99]}
        />
        <Flame 
          name={alLea}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[30, 34.99]}
        />
      </div>
      <div className="group right">
        <Flame 
          name={paulSallie}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[45, 49.99]}
        />
        <Flame 
          name={robEileen}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[40, 44.99]}
        />
        <Flame 
          name={theIrbys}
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
          name={theAndersons}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[53, 53.99]}
        />
        <Flame 
          name={theHernandezes}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[52, 52.99]}
        />
        <Flame 
          name={theHewitts}
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
