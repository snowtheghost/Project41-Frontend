import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import axios from 'src/utils/axiosInstance';
import LandingPage from 'src/components/Home/LandingPage';

import Box from '@mui/material/Box';

const HomePage = () => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get('/users/me');
      const userData = response.data;
      localStorage.setItem('username', userData.username);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const isLoggedIn = !!localStorage.getItem('token');
  const userType = localStorage.getItem('userType');

  return (
    <Box>
      {!isLoggedIn ? (
        <LandingPage />
      ) : userType === 'PLAYER' ? (
        <Navigate to='/gamelibrary' />
      ) : (
        <Navigate to='/myresearch' />
      )}
    </Box>
  );
};

export default HomePage;
