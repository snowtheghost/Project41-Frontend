import Box from '@mui/material/Box';

import ParticipantSideBar from '../../components/ParticipantViewShared/ParticipantSideBar';
import GamesList from 'src/components/Home/GamesList';

const GameLibraryIndex = () => {
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
      <GamesList />
    </Box>
  );
};

export default GameLibraryIndex;
