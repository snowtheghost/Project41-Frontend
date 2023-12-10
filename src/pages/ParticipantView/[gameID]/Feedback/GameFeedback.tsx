import Box from '@mui/material/Box';

import FeedbackForm from 'src/components/ParticipantViewShared/Feedback/FeedbackForm';
import GameSideBar from 'src/components/ParticipantViewShared/[gameID]/GameSidebar/GameSideBar';

const GameFeedback = () => {
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
      <FeedbackForm title='Feedback for game and research' />
    </Box>
  );
};

export default GameFeedback;
