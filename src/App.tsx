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
import GameLibraryIndex from './pages/ParticipantView/GameLibraryIndex';
import PlayHistory from './pages/ParticipantView/PlayHistory';
import Rewards from './pages/ParticipantView/Rewards';
import Profile from './pages/ParticipantView/Profile';
import TicTacToe from './pages/[gameId]/GameClient/TicTacToe';
import PrisonersDilemma from './pages/[gameId]/GameClient/PrisonersDilemma';
import Trust from './pages/[gameId]/GameClient/Trust';
import Ultimatum from './pages/[gameId]/GameClient/Ultimatum';
import { QueryClient, QueryClientProvider } from 'react-query';
import MyResearch from './pages/ResearcherView/MyResearch';
import OthersResearch from './pages/ResearcherView/OthersResearch';
import DataRequest from './pages/ResearcherView/DataRequest';
import SendRewards from './pages/ResearcherView/SendRewards';
import ResearcherFeedback from './pages/ResearcherView/ResearcherFeedback';
import ParticipantFeedback from './pages/ParticipantView/ParticipantFeedback';
import Settings from './pages/ParticipantView/Settings';
import GameHomePage from './pages/ParticipantView/GamePages/GameHomePage';
import GameFeedback from './pages/ParticipantView/GamePages/GameFeedback';
import GameConsent from './pages/ParticipantView/GamePages/Consent';
import GameInformation from './pages/ParticipantView/GamePages/GameInformation';
import ExperimentData from './pages/ResearcherView/[experimentId]/ExperimentData';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/gamelibrary' element={<GameLibraryIndex />} />
            <Route path='/playhistory' element={<PlayHistory />} />
            <Route path='/myrewards' element={<Rewards />} />
            <Route path='/myprofile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route
              path='/participant/feedback'
              element={<ParticipantFeedback />}
            />
            <Route path='/myresearch' element={<MyResearch />} />
            <Route path='/othersresearch' element={<OthersResearch />} />
            <Route path='/datarequest' element={<DataRequest />} />
            <Route
              path='/datarequest/:experimentId'
              element={<ExperimentData />}
            />
            <Route path='/sendrewards' element={<SendRewards />} />
            <Route
              path='/researcher/feedback'
              element={<ResearcherFeedback />}
            />
            <Route path='/:gameId/home' element={<GameHomePage />} />
            <Route path='/:gameId/information' element={<GameInformation />} />
            <Route path='/:gameId/consent' element={<GameConsent />} />
            <Route path='/:gameId/feedback' element={<GameFeedback />} />
            <Route
              path='/games/prisonersdilemma'
              element={<PrisonersDilemma />}
            />
            <Route path='/games/tictactoe' element={<TicTacToe />} />
            <Route path='/games/trust' element={<Trust />} />
            <Route path='/games/ultimatum' element={<Ultimatum />} />
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
    </QueryClientProvider>
  );
};

export default App;
