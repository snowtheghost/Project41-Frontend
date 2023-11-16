import { Link, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import axios from 'src/utils/axiosInstance';
import ResearcherSideBar from 'src/components/ResearcherViewShared/ResearcherSideBar';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const ExperimentData = () => {
  const { gameId } = useParams();
  const [totalMatches, setTotalMatches] = useState('0');
  const [isLoading, setIsLoading] = useState(true);

  const fetchAnalytics = async (gameType: string) => {
    try {
      await axios
        .get(`/games/getGameAnalytics?gameType=${gameType}`)
        .then(({ data }) => {
          setTotalMatches(data?.numPlayed ?? '0');
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // BAD PRACTICE
  useEffect(() => {
    setIsLoading(true);
    gameId && fetchAnalytics(gameId);
  }, [gameId]);

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
        {isLoading ? (
          <Box sx={{ margin: '1rem' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box>
            <Typography sx={{ fontSize: '48px', fontWeight: 800 }}>
              {gameId}
            </Typography>
            <Box className='experimentData' sx={{ margin: '1rem' }}>
              <Typography sx={{ fontSize: '32px', fontWeight: 500 }}>
                Total Participants: In future update
              </Typography>
              <Typography sx={{ fontSize: '32px', fontWeight: 500 }}>
                Total Matches: {totalMatches}
              </Typography>
              <Typography sx={{ fontSize: '32px', fontWeight: 500 }}>
                Match Breakdown: In future update
              </Typography>
              <Typography sx={{ fontSize: '32px', fontWeight: 500 }}>
                Match History: In future update
              </Typography>
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default ExperimentData;
