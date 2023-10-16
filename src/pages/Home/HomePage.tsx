import { useEffect } from 'react';

import axios from '../../utils/axiosInstance';
import LandingPage from 'src/components/Home/LandingPage';
import GamesList from 'src/components/Home/GamesList';

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

  return (
    <div>
      <h1>Project41 Website</h1>
      {!isLoggedIn ? <LandingPage /> : <GamesList />}
    </div>
  );
};

export default HomePage;
