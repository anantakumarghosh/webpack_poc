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
