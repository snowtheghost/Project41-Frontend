import Box from '@mui/material/Box';

import GamePage from 'src/components/ParticipantViewShared/[gameID]/Home/GamePage';
import GameSideBar from 'src/components/ParticipantViewShared/[gameID]/GameSidebar/GameSideBar';

const GameHomePage = () => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        backgroundColor: '#F9F8EB',
        width: '100%',
        height: '100vh',
      }}
    >
      <GameSideBar />
      <GamePage />
    </Box>
  );
};

export default GameHomePage;
