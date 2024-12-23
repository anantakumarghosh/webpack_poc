import React from 'react';

const DashboardStats = ({ data }) => {
  return (
    <div>
      <h2>Dashboard Stats</h2>
      {data && (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DashboardStats;
