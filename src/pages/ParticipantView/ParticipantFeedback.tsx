import FeedbackForm from "src/components/ParticipantViewShared/FeedbackForm";
import ParticipantSideBar from "../../components/ParticipantViewShared/ParticipantSideBar";
import Box from "@mui/material/Box";

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
      <FeedbackForm />

    </Box>
  );
};

export default ParticipantFeedback;