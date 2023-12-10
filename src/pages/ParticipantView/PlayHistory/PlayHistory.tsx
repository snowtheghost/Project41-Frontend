import Box from '@mui/material/Box';

import GamesList from 'src/components/ParticipantViewShared/GameLibrary/GamesList';
import ParticipantSideBar from 'src/components/ParticipantViewShared/Sidebar/ParticipantSideBar';

const PlayHistory = () => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        backgroundColor: '#F9F8EB',
        width: '100%',
        height: '100vh',
      }}
    >
      <ParticipantSideBar />
      {/* // TODO: add games={gamesData} for play history games */}
      <GamesList />
    </Box>
  );
};

export default PlayHistory;
