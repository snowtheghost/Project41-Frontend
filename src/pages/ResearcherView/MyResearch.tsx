import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ResearcherExperimentList from 'src/components/ResearcherViewShared/MyResearch/ResearcherExperimentList';
import ResearcherProfileInfo from 'src/components/ResearcherViewShared/MyResearch/ResearcherProfileInfo';
import ResearcherSideBar from 'src/components/ResearcherViewShared/ResearcherSideBar';

const MyResearch = () => {
  // This is a static placeholder. To remove once fetching is set up.
  const experimentList = [
    { gameName: `Prisoner's Dilemma`, participants: 0 },
    { gameName: 'Tic-Tac-Toe', participants: 0 },
    { gameName: 'Trust', participants: 0 },
    { gameName: 'Ultimatum', participants: 0 },
  ];

  return (
    <Grid
      container
      sx={{ backgroundColor: '#F9F8EB', minHeight: '100%', width: '100%' }}
    >
      <Grid item>
        <ResearcherSideBar />
      </Grid>
      <Grid item sx={{ margin: '1rem 1.5rem', width: '70%' }}>
        <ResearcherProfileInfo name={'FirstName LastName'} />
        <Grid container sx={{ margin: '1rem', width: '100%' }} spacing={2}>
          <Grid item xs={6}>
            <Typography
              sx={{ fontSize: '24px', fontWeight: 800, margin: '0.5rem' }}
            >
              Research Experiments
            </Typography>
            <ResearcherExperimentList experimentList={experimentList} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyResearch;
