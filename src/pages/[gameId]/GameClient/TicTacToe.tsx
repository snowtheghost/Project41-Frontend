import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import axios from 'src/utils/axiosInstance';
import FullPageSpinner from 'src/components/Shared/FullPageSpinner';

const TicTacToe = () => {
  const [canAct, setCanAct] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);

  let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  // THIS IS RUSHED
  const isWinner = (player: string) => {
    if (
      board[0].every((move) => move === player) ||
      board[1].every((move) => move === player) ||
      board[2].every((move) => move === player)
    ) {
      return true;
    }

    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === player &&
        board[1][col] === player &&
        board[2][col] === player
      ) {
        return true;
      }
    }

    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }

    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }

    return false;
  };

  const fetchMove = async (move: string) => {
    try {
      await axios.post(`/games/move?move=${move}`).then(({ data }) => {
        console.log(data);
        board = data.gameState.board;
        setIsGameComplete(data.gameState.game_over);
        if (isGameComplete) {
          setIsGameComplete(true);
          endGame();
        } else {
          setCanAct(true);
        }
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
    setCanAct(false);
    if (isWinner('X')) {
      setIsGameComplete(true);
    }
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
        Tic-Tac-Toe
      </Typography>
      {isGameComplete ? (
        <Box>
          <Typography>Results:</Typography>
          {isWinner('X') ? (
            <Typography>You Win!</Typography>
          ) : (
            <Typography>You Lose</Typography>
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
      <Grid container sx={{ m: 2 }}>
        <Grid item xs={6}>
          <Button
            disabled={!canAct || isGameComplete || !!board[0][0]}
            onClick={() => handleClick('00')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[0][0]}
          </Button>
          <Button
            disabled={!canAct || isGameComplete || !!board[0][1]}
            onClick={() => handleClick('01')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[0][1]}
          </Button>
          <Button
            disabled={!canAct || isGameComplete || !!board[0][2]}
            onClick={() => handleClick('02')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[0][2]}
          </Button>
        </Grid>
        <Grid item xs={7}>
          <Button
            disabled={!canAct || isGameComplete || !!board[1][0]}
            onClick={() => handleClick('10')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[1][0]}
          </Button>
          <Button
            disabled={!canAct || isGameComplete || !!board[1][1]}
            onClick={() => handleClick('11')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[1][1]}
          </Button>
          <Button
            disabled={!canAct || isGameComplete || !!board[1][2]}
            onClick={() => handleClick('12')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[1][2]}
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            disabled={!canAct || isGameComplete || !!board[2][0]}
            onClick={() => handleClick('20')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[2][0]}
          </Button>
          <Button
            disabled={!canAct || isGameComplete || !!board[2][1]}
            onClick={() => handleClick('21')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[2][1]}
          </Button>
          <Button
            disabled={!canAct || isGameComplete || !!board[2][2]}
            onClick={() => handleClick('22')}
            sx={{ border: 1, minHeight: '3rem' }}
          >
            {board[2][2]}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

const TicTacToeLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const startGame = async () => {
    try {
      await axios
        .post(
          '/games/start?gameType=tictactoe&player1_type=real&player2_type=minimax'
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
        <TicTacToe />
      )}
    </Box>
  );
};

export default TicTacToeLoader;
