import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ExperimentCard from 'src/components/ResearcherViewShared/DataRequest/ExperimentCard';
import ResearcherSideBar from 'src/components/ResearcherViewShared/Sidebar/ResearcherSideBar';

const DataRequest = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: '#F9F8EB', minHeight: '100%', width: '100%' }}
    >
      <Grid item>
        <ResearcherSideBar />
      </Grid>
      <Box sx={{ margin: '1rem', width: '66%' }}>
        <Typography sx={{ fontSize: '48px', fontWeight: 800 }}>
          Data Request
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <ExperimentCard
              title={`Prisoner's Dilemma`}
              description={`Pit yourself against another person or an AI with a classic game of Prisonner's Dilemma!`}
              game={'prisonersdilemma'}
            />
          </Grid>
          <Grid item>
            <ExperimentCard
              title={`Tic-Tac-Toe`}
              description={'Play a classic game of tic-tac-toe!'}
              game={'tictactoe'}
            />
          </Grid>
          <Grid item>
            <ExperimentCard
              title={`Trust`}
              description={
                'Play the role of investor or trustee and make your decisions!'
              }
              game={'trust'}
            />
          </Grid>
          <Grid item>
            <ExperimentCard
              title={`Ultimatum`}
              description={
                'Step right up and test your negotiation skills in the Ultimatum Game!'
              }
              game={'ultimatum'}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default DataRequest;
