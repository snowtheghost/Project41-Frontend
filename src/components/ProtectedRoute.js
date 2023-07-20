import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  if (!isLoggedIn()) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
