// src/components/Common/ProgressBar.js
import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ 
  value = 0, 
  max = 100, 
  color = '#4CAF50',
  showPercentage = true,
  height = '20px',
  animated = false
}) => {
  // Ensure value is within range
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = ((clampedValue / max) * 100).toFixed(2);

  return (
    <div 
      className={`progress-container ${animated ? 'animated' : ''}`}
      style={{ 
        width: '100%', 
        backgroundColor: '#e0e0e0', 
        borderRadius: '5px',
        height 
      }}
    >
      <div 
        className="progress-bar"
        style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: color,
          borderRadius: '5px',
          transition: 'width 0.5s ease-in-out',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}
      >
        {showPercentage && `${percentage}%`}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
  showPercentage: PropTypes.bool,
  height: PropTypes.string,
  animated: PropTypes.bool
};

export default ProgressBar;