import { Link, useLocation } from 'react-router-dom';

import Grid from '@mui/material/Grid';

import ResearcherSideBar from 'src/components/ResearcherViewShared/ResearcherSideBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ExperimentData = () => {
  const location = useLocation();

  return (
    <Grid
      container
      sx={{ backgroundColor: '#F9F8EB', minHeight: '100%', width: '100%' }}
    >
      <Grid item>
        <ResearcherSideBar />
      </Grid>
      <Grid item sx={{ margin: '1rem' }}>
        <Link to='/datarequest'>{'<< Experiments'}</Link>
        <Typography sx={{ fontSize: '48px', fontWeight: 800 }}>
          Project Title
        </Typography>
        <Box className='experimentData' sx={{ margin: '1rem' }}>
          <Typography sx={{ fontSize: '32px', fontWeight: 500 }}>
            Total Participants:
          </Typography>
          <Typography sx={{ fontSize: '32px', fontWeight: 500 }}>
            Total Matches:
          </Typography>
          <Typography sx={{ fontSize: '32px', fontWeight: 500 }}>
            Match Breakdown:
          </Typography>
          <Typography sx={{ fontSize: '32px', fontWeight: 500 }}>
            Match History:
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExperimentData;
