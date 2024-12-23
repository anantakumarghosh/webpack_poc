// src/components/Common/Counter.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ 
  initialValue = 0, 
  min = -Infinity, 
  max = Infinity, 
  step = 1, 
  onChange 
}) => {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    if (count < max) {
      const newCount = count + step;
      setCount(newCount);
      onChange && onChange(newCount);
    }
  };

  const decrementCount = () => {
    if (count > min) {
      const newCount = count - step;
      setCount(newCount);
      onChange && onChange(newCount);
    }
  };

  const resetCount = () => {
    setCount(initialValue);
    onChange && onChange(initialValue);
  };

  return (
    <div className="counter-container">
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      <div className="counter-controls">
        <button 
          onClick={decrementCount} 
          disabled={count <= min}
          className="counter-btn decrement"
        >
          -
        </button>
        <button 
          onClick={resetCount}
          className="counter-btn reset"
        >
          Reset
        </button>
        <button 
          onClick={incrementCount} 
          disabled={count >= max}
          className="counter-btn increment"
        >
          +
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func
};

export default Counter;