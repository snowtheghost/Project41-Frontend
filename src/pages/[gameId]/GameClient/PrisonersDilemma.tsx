import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FullPageSpinner from 'src/components/Shared/FullPageSpinner';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import axios from 'src/utils/axiosInstance';

const PrisonersDilemma = () => {
  const [canAct, setCanAct] = useState(true);
  const [isError, setIsError] = useState(false);
  const [playerChoice, setPlayerChoice] = useState('');
  const [opponentChoice, setOpponentChoice] = useState('');

  const fetchMove = async (move: string) => {
    try {
      await axios.post(`/games/move?move=${move}`).then(({ data }) => {
        setOpponentChoice(data);
        setCanAct(true);
      });
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  const endGame = async () => {
    try {
      await axios.post(`/games/quit`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (move: string) => {
    setPlayerChoice(move);
    setCanAct(false);
    fetchMove(move);
  };

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      // Perform actions before the component unloads
      event.preventDefault();
      event.returnValue = '';
      endGame();
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Box>
      <Typography variant={'h4'} sx={{ m: '1.5rem', fontWeight: 800 }}>
        Prisoner's Dilemma
      </Typography>
      {playerChoice && opponentChoice ? (
        <Box>
          <Typography>Results:</Typography>
          {playerChoice === 'C' && opponentChoice === 'C' ? (
            <Typography>Both parties cooperated</Typography>
          ) : playerChoice === 'C' && opponentChoice === 'D' ? (
            <Typography>You got betrayed!</Typography>
          ) : playerChoice === 'D' && opponentChoice === 'C' ? (
            <Typography>You successfully betrayed the opponent!</Typography>
          ) : (
            <Typography>Both parties defected</Typography>
          )}
          <Link component={RouterLink} to={`/`}>
            Return Home
          </Link>
        </Box>
      ) : canAct ? (
        <Typography sx={{ m: '1.5rem', fontWeight: 600 }}>Your Turn</Typography>
      ) : !isError ? (
        <Box sx={{ m: '1.5rem' }}>
          <Typography>Waiting for opponent</Typography>
          <CircularProgress sx={{ m: '2rem' }} />
        </Box>
      ) : (
        <p>An error has occurred</p>
      )}
      <Button
        disabled={!canAct}
        onClick={() => handleClick('C')}
        sx={{ backgroundColor: '#00ff00', m: '0 1.5rem' }}
      >
        Cooperate
      </Button>
      <Button
        disabled={!canAct}
        onClick={() => handleClick('D')}
        sx={{ backgroundColor: '#ff0000', m: '0 1.5rem' }}
      >
        Defect
      </Button>
    </Box>
  );
};

const PrisonersDilemmaLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const startGame = async () => {
    try {
      await axios
        .post(
          '/games/start?gameType=prisoners_dilemma&player1_type=real&player2_type=minimax'
        )
        .then(() => {
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <FullPageSpinner />
      ) : isError ? (
        <p>An error has occurred</p>
      ) : (
        <PrisonersDilemma />
      )}
    </Box>
  );
};

export default PrisonersDilemmaLoader;
