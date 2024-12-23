// src/components/Common/ToggleSwitch.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ToggleSwitch = ({ 
  initialState = false, 
  onChange,
  label,
  disabled = false
}) => {
  const [isToggled, setIsToggled] = useState(initialState);

  const handleToggle = () => {
    if (!disabled) {
      const newState = !isToggled;
      setIsToggled(newState);
      onChange && onChange(newState);
    }
  };

  return (
    <div className={`toggle-switch ${disabled ? 'disabled' : ''}`}>
      {label && <span className="toggle-label">{label}</span>}
      <label className="switch">
        <input 
          type="checkbox" 
          checked={isToggled}
          onChange={handleToggle}
          disabled={disabled}
        />
        <span className="slider round"></span>
      </label>
      <span className="toggle-state">
        {isToggled ? 'On' : 'Off'}
      </span>
    </div>
  );
};

ToggleSwitch.propTypes = {
  initialState: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool
};

export default ToggleSwitch;