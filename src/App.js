import { useState } from 'react';
import './App.css';
import Flame from './components/Flame';
import Video from './components/Video';
import startOver from './img/startOver.png';
import download from './img/download.png';
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
          placard={startOver}
          setPosition={setPosition}
          currentTime={currentTime}
          window={[0.0001, 7]}
        />
        <Flame 
          placard={katina} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[7, 247]}
        />
        <Flame 
          placard={kayGary}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[247, 326]}
        />
        <Flame 
          placard={theAlexanders}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[326, 393]}
        />
      </div>
      <div className="group bottom">
        <Flame 
          placard={theLewises}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[393, 450]}
        />
        <Flame 
          placard={jamesTricia} 
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[450, 495]}
        />
        <Flame 
          placard={alLea}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[495, 637]}
        />
      </div>
      <div className="group right">
        <a 
          href="https://drive.google.com/uc?export=download&id=1wBoMibsFZq_FJejOHPOWLy1IwPDeVKct"
          target="_none"
        >
          <Flame 
            setPosition={setPosition} 
            placard={download}
          />
        </a>
        <Flame 
          placard={theIrbys}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[637, 707]}
        />
        <Flame 
          placard={robEileen}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[707, 793]}
        />
        <Flame 
          placard={paulSallie}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[793, 871]}
        />
      </div>
      <div className="group top">
        <Flame 
          placard={theHewitts}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[871, 960]}
        />
        <Flame 
          placard={theHernandezes}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[960, 1054]}
        />
        <Flame 
          placard={theAndersons}
          setPosition={setPosition} 
          currentTime={currentTime}
          window={[1054, 1109]}
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
