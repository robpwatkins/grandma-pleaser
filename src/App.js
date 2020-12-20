import './App.css';
import Flame from './components/Flame';

function App() {
  return (
    <div className="App">
      <div className="group left">
        <Flame />
        <Flame />
        <Flame />
        <Flame />
      </div>
      <div className="group bottom">
        <Flame />
        <Flame />
        <Flame />
      </div>
      <div className="group right">
        <Flame />
        <Flame />
        <Flame />
      </div>
      <div className="group top">
        <Flame />
        <Flame />
        <Flame />
      </div>
      <div className="group middle"></div>
    </div>
  );
}

export default App;
