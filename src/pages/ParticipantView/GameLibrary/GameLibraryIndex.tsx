import Box from '@mui/material/Box';

import './style.css';
import ParticipantSideBar from '../../../components/ParticipantViewShared/ParticipantSideBar';

const GameLibraryIndex = () => {
  return (
    <Box sx={{ backgroundColor: '#F9F8EB', minHeight: '100vh', width: '100%' }}>
      {<ParticipantSideBar />}
    </Box>
  );
};

export default GameLibraryIndex;
