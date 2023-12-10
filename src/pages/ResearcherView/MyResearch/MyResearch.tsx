import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import axios from 'src/utils/axiosInstance';
import DeleteAccountFlow from 'src/components/Shared/Users/DeleteAccountFlow';
import ResearcherExperimentList from 'src/components/ResearcherViewShared/MyResearch/ResearcherExperimentList';
import ResearcherProfileInfo from 'src/components/ResearcherViewShared/MyResearch/ResearcherProfileInfo';
import ResearcherSideBar from 'src/components/ResearcherViewShared/Sidebar/ResearcherSideBar';

const MyResearch = () => {
  // This is a static placeholder. To remove once fetching is set up.
  const experimentList = [
    { gameName: `Prisoner's Dilemma`, participants: 0 },
    { gameName: 'Tic-Tac-Toe', participants: 0 },
    { gameName: 'Trust', participants: 0 },
    { gameName: 'Ultimatum', participants: 0 },
  ];

  const [isLoadingCSV, setIsLoadingCSV] = useState(false);
  const [fetchFailed, setFetchFailed] = useState(false);

  const fetchCSV = async () => {
    try {
      // Using researcherId=1 for now as a placeholder until other researchers can store their data.
      await axios.get(`/games/getGamesCsv?researcherId=1`).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `results.csv`);
        document.body.appendChild(link);
        link.click();
        setIsLoadingCSV(false);
      });
    } catch (error) {
      console.error(error);
      setFetchFailed(true);
      setIsLoadingCSV(false);
    }
  };

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
            <Box sx={{ margin: '1rem' }}>
              <Button
                sx={{
                  'color': '#f9f8eb',
                  'backgroundColor': '#05004e',
                  ':hover': { backgroundColor: '#f9f8eb', color: '#05004e' },
                }}
                onClick={() => {
                  setIsLoadingCSV(true);
                  setFetchFailed(false);
                  fetchCSV();
                }}
              >
                {!isLoadingCSV ? 'Export to CSV' : <CircularProgress />}
              </Button>
              {fetchFailed && (
                <Typography sx={{ color: '#cb2e2e' }}>
                  Failed to download CSV. Please try again later.
                </Typography>
              )}
            </Box>
            <ResearcherExperimentList experimentList={experimentList} />
          </Grid>
          <DeleteAccountFlow userType={'RESEARCHER'} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MyResearch;
