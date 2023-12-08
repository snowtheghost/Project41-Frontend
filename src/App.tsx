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
            <Route
              path='/gamelibrary'
              element={
                <ProtectedRoute>
                  <GameLibraryIndex />
                </ProtectedRoute>
              }
            />
            <Route
              path='/playhistory'
              element={
                <ProtectedRoute>
                  <PlayHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path='/myrewards'
              element={
                <ProtectedRoute>
                  <Rewards />
                </ProtectedRoute>
              }
            />
            <Route
              path='/myprofile'
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path='/participant/feedback'
              element={
                <ProtectedRoute>
                  <ParticipantFeedback />
                </ProtectedRoute>
              }
            />
            <Route
              path='/myresearch'
              element={
                <ProtectedRoute>
                  <MyResearch />
                </ProtectedRoute>
              }
            />
            <Route
              path='/othersresearch'
              element={
                <ProtectedRoute>
                  <OthersResearch />
                </ProtectedRoute>
              }
            />
            <Route
              path='/datarequest'
              element={
                <ProtectedRoute>
                  <DataRequest />
                </ProtectedRoute>
              }
            />
            <Route
              path='/datarequest/:gameId'
              element={
                <ProtectedRoute>
                  <ExperimentData />
                </ProtectedRoute>
              }
            />
            <Route
              path='/sendrewards'
              element={
                <ProtectedRoute>
                  <SendRewards />
                </ProtectedRoute>
              }
            />
            <Route
              path='/researcher/feedback'
              element={
                <ProtectedRoute>
                  <ResearcherFeedback />
                </ProtectedRoute>
              }
            />
            <Route
              path='/:gameId/home'
              element={
                <ProtectedRoute>
                  <GameHomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/:gameId/information'
              element={
                <ProtectedRoute>
                  <GameInformation />
                </ProtectedRoute>
              }
            />
            <Route
              path='/:gameId/consent'
              element={
                <ProtectedRoute>
                  <GameConsent />
                </ProtectedRoute>
              }
            />
            <Route
              path='/:gameId/feedback'
              element={
                <ProtectedRoute>
                  <GameFeedback />
                </ProtectedRoute>
              }
            />
            <Route
              path='/games/prisonersdilemma'
              element={
                <ProtectedRoute>
                  <PrisonersDilemma />
                </ProtectedRoute>
              }
            />
            <Route
              path='/games/tictactoe'
              element={
                <ProtectedRoute>
                  <TicTacToe />
                </ProtectedRoute>
              }
            />
            <Route
              path='/games/trust'
              element={
                <ProtectedRoute>
                  <Trust />
                </ProtectedRoute>
              }
            />
            <Route
              path='/games/ultimatum'
              element={
                <ProtectedRoute>
                  <Ultimatum />
                </ProtectedRoute>
              }
            />
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
