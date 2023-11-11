import Box from '@mui/material/Box';
import GameSideBar from 'src/components/ParticipantViewShared/GameSideBar';
import Information from 'src/components/ParticipantViewShared/Information';


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