import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ExperimentCard from 'src/components/ResearcherViewShared/DataRequest/ExperimentCard';

import ResearcherSideBar from 'src/components/ResearcherViewShared/ResearcherSideBar';

const DataRequest = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: '#F9F8EB', minHeight: '100%', width: '100%' }}
    >
      <Grid item>
        <ResearcherSideBar />
      </Grid>
      <Grid item sx={{ margin: '1rem' }}>
        <Typography sx={{ fontSize: '48px', fontWeight: 800 }}>
          Data Request
        </Typography>
        <ExperimentCard
          title={`Prisoner's Dilemma`}
          description={'Insert Description'}
          game={'prisonersdilemma'}
        />
      </Grid>
    </Grid>
  );
};

export default DataRequest;
