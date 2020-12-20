import { useState } from 'react';
import './App.css';
import Flame from './components/Flame';
import Video from './components/Video';

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <div className="group left">
        <Flame 
          name="Grandma" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="Katina" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="Kay & Gary" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="Faith & Ron" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
      </div>
      <div className="group bottom">
        <Flame 
          name="John, Melanie, Teddy & Josephine" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="James & Tricia" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="Al & Lea" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
      </div>
      <div className="group right">
        <Flame 
          name="Paul & Sallie" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="Rob & Eileen" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="Amy, Matthew, Samual & Luke" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
      </div>
      <div className="group top">
        <Flame 
          name="Matthew, Leila & Micah" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="Hannah, Mark, Aundrea & Joaquin" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
        <Flame 
          name="Kayla, Darby, Jonas & Ellie" 
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          />
      </div>
      <div className="group middle">
        <Video />
      </div>
    </div>
  );
}

export default App;
