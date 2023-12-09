import Grid from '@mui/material/Grid';

import DeleteAccountFlow from 'src/components/Shared/Users/DeleteAccountFlow';
import ParticipantSideBar from 'src/components/ParticipantViewShared/Sidebar/ParticipantSideBar';
import ParticipantProfileInfo from 'src/components/ParticipantViewShared/MyProfile/ParticipantProfile';
import Box from '@mui/material/Box';

const Profile = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: '#F9F8EB', minHeight: '100vh', width: '100%' }}
    >
      <Grid item>
        <ParticipantSideBar />
      </Grid>
      <Grid item sx={{ margin: '1rem 1.5rem', width: '70%' }}>
        <ParticipantProfileInfo name={'SteveSmith123'} />
        <Box sx={{ marginTop: '4rem' }}>
          <DeleteAccountFlow userType={'PLAYER'} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
