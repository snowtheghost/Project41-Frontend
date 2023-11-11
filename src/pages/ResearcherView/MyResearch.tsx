import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ResearcherProfileInfo from 'src/components/ResearcherViewShared/ResearcherProfileInfo';

import ResearcherSideBar from 'src/components/ResearcherViewShared/ResearcherSideBar';

const MyResearch = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: '#F9F8EB', minHeight: '100%', width: '100%' }}
    >
      <Grid item>
        <ResearcherSideBar />
      </Grid>
      <Grid item sx={{ margin: '1rem 1.5rem' }}>
        <ResearcherProfileInfo name={'FirstName LastName'} />
        <Typography sx={{ fontSize: '48px' }}>My Research</Typography>
      </Grid>
    </Grid>
  );
};

export default MyResearch;
