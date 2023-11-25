import Box from "@mui/material/Box";
import ParticipantSideBar from "../../components/ParticipantViewShared/ParticipantSideBar";
import RewardsTable from "src/components/ParticipantViewShared/RewardTable";

const Rewards = () => {
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
      <RewardsTable />
    </Box>
  );
};

export default Rewards;