// src/components/User/UserDashboard.js
import React, { useState, useEffect } from 'react';
import ModuleRegistry from '../../modules';

const UserDashboard = () => {
  const { User } = ModuleRegistry;
  const { Profile, Avatar, Settings } = User.components;

  const [userData, setUserData] = useState({
    id: '123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatarUrl: 'https://via.placeholder.com/150',
    role: 'Developer'
  });

  return (
    <div className="user-dashboard">
      <div className="user-header">
        <Avatar 
          userId={userData.id} 
          src={userData.avatarUrl} 
          alt={userData.name} 
        />
        <h1>{userData.name}</h1>
        <p>{userData.role}</p>
      </div>

      <div className="user-content">
        <div className="user-profile">
          <h2>Profile Details</h2>
          <Profile user={userData} />
        </div>

        <div className="user-settings">
          <h2>Account Settings</h2>
          <Settings 
            userId={userData.id}
            onSettingsUpdate={(updatedSettings) => {
              console.log('Settings updated:', updatedSettings);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;