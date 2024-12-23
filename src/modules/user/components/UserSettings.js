import React, { useState } from 'react';

const UserSettings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    theme: 'light'
  });

  return (
    <div>
      <h2>User Settings</h2>
      <div>
        <label>
          Notifications
          <input 
            type="checkbox" 
            checked={settings.notifications}
            onChange={() => setSettings(prev => ({
              ...prev,
              notifications: !prev.notifications
            }))}
          />
        </label>
      </div>
      <div>
        <label>
          Theme
          <select 
            value={settings.theme}
            onChange={(e) => setSettings(prev => ({
              ...prev,
              theme: e.target.value
            }))}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default UserSettings;
