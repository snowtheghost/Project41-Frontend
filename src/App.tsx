import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Layout from './components/Shared/Layout';
import ProtectedRoute from './components/Shared/ProtectedRoute';

import FundsPage from './pages/Home/FundsPage';
import HomePage from './pages/Home/HomePage';
import RegisterPage from './pages/UserLogin/RegisterPage';
import LoginPage from './pages/UserLogin/LoginPage';
import GameLibraryIndex from './pages/ParticipantView/GameLibrary/GameLibraryIndex';
import PlayHistory from './pages/ParticipantView/PlayHistory/PlayHistory';
import Rewards from './pages/ParticipantView/Rewards/Rewards';
import Profile from './pages/ParticipantView/Profile/Profile';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/gamelibrary' element={<GameLibraryIndex/>} />
          <Route path='/playhistory' element={<PlayHistory/>} />
          <Route path='/myrewards' element={<Rewards/>} />
          <Route path='/myprofile' element={<Profile/>} />
          <Route
            path='/funds'
            element={
              <ProtectedRoute>
                <FundsPage />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
