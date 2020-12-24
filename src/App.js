import { useState } from 'react';
import './App.css';
import Flame from './components/Flame';
import Video from './components/Video';

function App() {
  const [time, setTime] = useState(0);

  console.log(time);
  return (
    <div className="App">
      <div className="group left">
<<<<<<< HEAD
        <Flame setTime={setTime} t={0} name="Play from Start" />
        <Flame setTime={setTime} t={5} name="Katina" />
        <Flame setTime={setTime} t={25} name="Kay & Gary" />
        <Flame setTime={setTime} t={45} name="The Alexanders" />
=======
        <Flame name="Play from Start" />
        <Flame name="Katina" />
        <Flame name="Kay & Gary" />
        <Flame name="The Alexanders" />
>>>>>>> 2ac436f22316a296405c8ea2d7e6c075e4facd61
      </div>
      <div className="group bottom">
        <Flame setTime={setTime} name="The Lewises" />
        <Flame setTime={setTime} name="James & Tricia" />
        <Flame setTime={setTime} name="Al & Lea" />
      </div>
      <div className="group right">
<<<<<<< HEAD
        <Flame setTime={setTime} name="Paul & Sallie" />
        <Flame setTime={setTime} name="Rob & Eileen" />
        <Flame setTime={setTime} name="The Irbys" />
        <Flame setTime={setTime} name="Download Video" />
=======
        <Flame name="Paul & Sallie" />
        <Flame name="Rob & Eileen" />
        <Flame name="The Irbys" />
        <Flame name="Download Video" />
>>>>>>> 2ac436f22316a296405c8ea2d7e6c075e4facd61
      </div>
      <div className="group top">
        <Flame setTime={setTime} name="The Andersons" />
        <Flame setTime={setTime} name="The Hernandezes" />
        <Flame setTime={setTime} name="The Hewitts" />
      </div>
      <div className="group middle">
        <Video time={time} />
      </div>
    </div>
  );
}

export default App;
