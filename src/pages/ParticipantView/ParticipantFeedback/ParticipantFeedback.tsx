import Box from '@mui/material/Box';

import FeedbackForm from 'src/components/ParticipantViewShared/Feedback/FeedbackForm';
import ParticipantSideBar from 'src/components/ParticipantViewShared/Sidebar/ParticipantSideBar';

const ParticipantFeedback = () => {
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
      <FeedbackForm title='Feedback for Platform' />
    </Box>
  );
};

export default ParticipantFeedback;
