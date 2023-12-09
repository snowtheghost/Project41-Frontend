import Box from '@mui/material/Box';

import DeleteAccountFlow from 'src/components/Shared/Users/DeleteAccountFlow';
import ParticipantSideBar from 'src/components/ParticipantViewShared/Sidebar/ParticipantSideBar';

const Profile = () => {
  return (
    <Box sx={{ backgroundColor: '#F9F8EB', minHeight: '100vh', width: '100%' }}>
      <ParticipantSideBar />
      <DeleteAccountFlow userType={'PLAYER'} />
    </Box>
  );
};

export default Profile;
