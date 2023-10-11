import React from 'react';
import { logout } from '../../utils/auth';

const LogoutButton = ({ navigate }) => {
  const handleLogout = () => {
    logout();
    navigate('/');
    window.location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
