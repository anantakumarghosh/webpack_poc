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
