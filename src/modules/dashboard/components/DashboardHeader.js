// src/modules/dashboard/components/DashboardHeader.js
import React from 'react';
import PropTypes from 'prop-types';

const DashboardHeader = ({ title = 'Dashboard' }) => {
  // Add null check and default props
  if (!title) {
    console.warn('No title provided for DashboardHeader');
    return null;
  }

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

// Add PropTypes for type checking
DashboardHeader.propTypes = {
  title: PropTypes.string
};

export default DashboardHeader;