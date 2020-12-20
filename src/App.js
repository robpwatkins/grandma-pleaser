import { useState } from 'react';
import './App.css';
import Flame from './components/Flame';
import Video from './components/Video';

function App() {
  // const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <div className="group left">
        <Flame name="Grandma" />
        <Flame name="Katina" />
        <Flame name="Kay & Gary" />
        <Flame name="Faith & Ron" />
      </div>
      <div className="group bottom">
        <Flame name="John, Melanie, Teddy & Josephine" />
        <Flame name="James & Tricia" />
        <Flame name="Al & Lea" />
      </div>
      <div className="group right">
        <Flame name="Paul & Sallie" />
        <Flame name="Rob & Eileen" />
        <Flame name="Amy, Matthew, Samual & Luke" />
      </div>
      <div className="group top">
        <Flame name="Matthew, Leila & Micah" />
        <Flame name="Hannah, Mark, Aundrea & Joaquin" />
        <Flame name="Kayla, Darby, Jonas & Ellie" />
      </div>
      <div className="group middle">
        <Video />
      </div>
    </div>
  );
}

export default App;
