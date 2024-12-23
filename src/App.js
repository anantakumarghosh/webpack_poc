import React, { useState } from 'react';
import Counter from './components/Common/Counter';
import ToggleSwitch from './components/Common/ToggleSwitch';
import ProgressBar from './components/Common/ProgressBar';
// import './components/Common/CommonComponents.css';

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [toggleState, setToggleState] = useState(false);

  return (
    <div className="app">
      <h1>Component Showcase</h1>
      
      <Counter 
        initialValue={0}
        min={-10}
        max={10}
        onChange={(value) => setCounterValue(value)}
      />
      <p>Current Counter Value: {counterValue}</p>

      <ToggleSwitch 
        initialState={false}
        label="Dark Mode"
        onChange={(state) => setToggleState(state)}
      />
      <p>Toggle State : {toggleState ? 'On' : 'Off'}</p>

      <ProgressBar 
        value={counterValue + 10} 
        max={20} 
        color="#4CAF50" 
        showPercentage={true} 
        height="30px" 
        animated={true} 
      />
    </div>
  );
}

export default App;