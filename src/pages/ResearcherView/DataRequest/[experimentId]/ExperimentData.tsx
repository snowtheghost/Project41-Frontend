import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import axios from 'src/utils/axiosInstance';
import ResearcherSideBar from 'src/components/ResearcherViewShared/Sidebar/ResearcherSideBar';

type GameObject = {
  status: string;
  message: string;
  gameState: {
    board?: string[][];
    game_over: boolean;
    winner: string;
    payoff1: number;
    payoff2: number;
    valid_moves: string[];
  };
};

const ExperimentData = () => {
  const { gameId } = useParams();
  const [totalMatches, setTotalMatches] = useState('0');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingCSV, setIsLoadingCSV] = useState(false);
  const [csvURL, setCsvURL] = useState('');
  const [matches, setMatches] = useState<
    { id: string; game_object: GameObject }[]
  >([]);

  const fetchAnalytics = async (gameType: string) => {
    try {
      await axios
        .get(`/games/getGameAnalytics?gameType=${gameType}`)
        .then(({ data }) => {
          setTotalMatches(data?.numPlayed ?? '0');
          setMatches(data.games);
          setCsvURL(data.url ?? '');
          setIsLoading(false);
        });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const fetchCSV = async (gameType: string) => {
    try {
      await axios.get(csvURL).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${gameType}_results.csv`);
        document.body.appendChild(link);
        link.click();
        setIsLoadingCSV(false);
      });
    } catch (error) {
      console.error(error);
      setIsLoadingCSV(false);
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
        <Grid container direction={'row'} justifyContent={'space-between'}>
          <Link to='/datarequest' style={{ margin: '0.5rem' }}>
            {'<< Experiments'}
          </Link>
          <Button
            disabled={isLoading}
            sx={{
              'color': '#f9f8eb',
              'backgroundColor': '#05004e',
              ':hover': { backgroundColor: '#f9f8eb', color: '#05004e' },
            }}
            onClick={() => {
              setIsLoadingCSV(true);
              gameId && fetchCSV(gameId);
            }}
          >
            {!isLoading ? 'Export to CSV' : <CircularProgress />}
          </Button>
        </Grid>
        {isLoadingCSV ? (
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
                Match History:
              </Typography>
              {matches.map((match) => {
                const gameState = match.game_object.gameState;
                return (
                  <Box sx={{ margin: '0.5rem' }}>
                    <Typography>
                      <b>Match:</b> {match.id}
                    </Typography>
                    <Typography sx={{ margin: '1rem' }}>
                      <b>Winner:</b> {gameState.winner}
                    </Typography>
                    <Typography sx={{ margin: '1rem' }}>
                      <b>Player 1 Payout:</b> {gameState.payoff1}
                    </Typography>
                    <Typography sx={{ margin: '1rem' }}>
                      <b>Player 2 Payout:</b> {gameState.payoff2}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default ExperimentData;
