#!/bin/bash

# Set the project directory
PROJECT_DIR=./

# Create module directories
mkdir -p $PROJECT_DIR/src/modules/{dashboard,user,auth}/components

# Dashboard Module Files
cat > $PROJECT_DIR/src/modules/dashboard/components/DashboardHeader.js << 'EOF'
import React from 'react';

const DashboardHeader = ({ title }) => {
  return (
    <header>
      <h1>{title || 'Dashboard'}</h1>
    </header>
  );
};

export default DashboardHeader;
EOF

cat > $PROJECT_DIR/src/modules/dashboard/components/DashboardStats.js << 'EOF'
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
EOF

cat > $PROJECT_DIR/src/modules/dashboard/components/DashboardLayout.js << 'EOF'
import React from 'react';

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      {children}
    </div>
  );
};

export default DashboardLayout;
EOF

cat > $PROJECT_DIR/src/modules/dashboard/DashboardRegistry.js << 'EOF'
import DashboardHeader from './components/DashboardHeader';
import DashboardStats from './components/DashboardStats';
import DashboardLayout from './components/DashboardLayout';

export const DashboardComponents = {
  Header: DashboardHeader,
  Stats: DashboardStats,
  Layout: DashboardLayout
};

export default {
  components: DashboardComponents,
  moduleName: 'Dashboard',
  
  createDashboardView: (props) => {
    const { Layout, Header, Stats } = DashboardComponents;
    return (
      <Layout>
        <Header {...props.headerProps} />
        <Stats {...props.statsProps} />
      </Layout>
    );
  }
};
EOF

# User Module Files
cat > $PROJECT_DIR/src/modules/user/components/UserProfile.js << 'EOF'
import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
EOF

cat > $PROJECT_DIR/src/modules/user/components/UserSettings.js << 'EOF'
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
EOF

cat > $PROJECT_DIR/src/modules/user/components/UserAvatar.js << 'EOF'
import React from 'react';

const UserAvatar = ({ userId, src, alt }) => {
  return (
    <div className="user-avatar">
      <img 
        src={src || `https://via.placeholder.com/50?text=${userId}`}
        alt={alt || 'User Avatar'}
      />
    </div>
  );
};

export default UserAvatar;
EOF

cat > $PROJECT_DIR/src/modules/user/UserRegistry.js << 'EOF'
import UserProfile from './components/UserProfile';
import UserSettings from './components/UserSettings';
import UserAvatar from './components/UserAvatar';

export const UserComponents = {
  Profile: UserProfile,
  Settings: UserSettings,
  Avatar: UserAvatar
};

export default {
  components: UserComponents,
  moduleName: 'User',
  
  createUserView: (props) => {
    const { Profile, Avatar, Settings } = UserComponents;
    return (
      <div>
        <Avatar {...props.avatarProps} />
        <Profile {...props.profileProps} />
        <Settings {...props.settingsProps} />
      </div>
    );
  }
};
EOF

# Auth Module Files
cat > $PROJECT_DIR/src/modules/user/components/LoginForm.js << 'EOF'
import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email"
        placeholder="Email"
        value={credentials.email}
        onChange={(e) => setCredentials(prev => ({
          ...prev,
          email: e.target.value
        }))}
      />
      <input 
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials(prev => ({
          ...prev,
          password: e.target.value
        }))}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
EOF

# Global Module Registry
cat > $PROJECT_DIR/src/modules/index.js << 'EOF'
import DashboardModule from './dashboard/DashboardRegistry';
import UserModule from './user/UserRegistry';

export const ModuleRegistry = {
  Dashboard: DashboardModule,
  User: UserModule
};

export const getModule = (moduleName) => {
  return ModuleRegistry[moduleName] || null;
};

export default ModuleRegistry;
EOF

# Print completion message
echo "Module structure created successfully in $PROJECT_DIR/src/modules"