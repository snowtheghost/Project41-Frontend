import Box from '@mui/material/Box';
import GameSideBar from 'src/components/ParticipantViewShared/[gameID]/GameSidebar/GameSideBar';
import Information from 'src/components/ParticipantViewShared/[gameID]/Information';

const GameInformation = () => {
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
      <Information />
    </Box>
  );
};

export default GameInformation;
