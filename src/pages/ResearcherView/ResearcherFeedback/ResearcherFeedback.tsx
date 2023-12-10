import Box from '@mui/material/Box';

import FeedbackForm from 'src/components/ParticipantViewShared/Feedback/FeedbackForm';
import ResearcherSideBar from 'src/components/ResearcherViewShared/Sidebar/ResearcherSideBar';

const ResearcherFeedback = () => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        backgroundColor: '#F9F8EB',
        width: '100%',
        height: '100vh',
      }}
    >
      <ResearcherSideBar />
      <FeedbackForm title='Feedback for Platform' />
    </Box>
  );
};

export default ResearcherFeedback;
