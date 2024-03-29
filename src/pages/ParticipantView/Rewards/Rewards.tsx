import Box from '@mui/material/Box';

import ParticipantSideBar from 'src/components/ParticipantViewShared/Sidebar/ParticipantSideBar';
import RewardsTable from 'src/components/ParticipantViewShared/Rewards/RewardTable';

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
