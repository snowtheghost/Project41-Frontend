import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Link, Typography } from '@mui/material';

import axios from 'src/utils/axiosInstance';
import FullPageSpinner from 'src/components/Shared/FullPageSpinner';

type Props = {
  endowment?: number;
};

const Trust = (props: Props) => {
  const { endowment = 100 } = props;
  const [gameOver, setGameOver] = useState(false);
  const [isError, setIsError] = useState(false);
  const [canAct, setCanAct] = useState(true);
  const [playerProposal, setPlayerProposal] = useState('0');
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [winner, setWinner] = useState('none');
  const [round, setRounds] = useState(1);

  const fetchMove = async (move: string) => {
    try {
      await axios.post(`/games/move?move=${move}`).then(({ data }) => {
        setGameOver(data.gameState.game_over);
        setPlayerScore(data.gameState.payoff1);
        setOpponentScore(data.gameState.payoff2);
        setWinner(data.gameState.winner);
        setRounds(round + 1);
        setCanAct(true);
        if (gameOver) {
          endGame();
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

  // When trying to leave the page, send a quit API call to the BE
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
      <Typography>Trust</Typography>
      {isError ? (
        <Typography>An error occurred</Typography>
      ) : gameOver ? (
        <Typography>Game over. Winner: {winner}</Typography>
      ) : canAct ? (
        <Typography>Round {round}. Your Turn</Typography>
      ) : (
        <Typography>Round {round}. Waiting for opponent's move</Typography>
      )}
      <Typography>Your Score: {playerScore}</Typography>
      <Typography>Opponent's Score: {opponentScore}</Typography>
      {!gameOver ? (
        <Box>
          <Typography>Enter your proposal between 0 and {endowment}</Typography>
          <input
            type='number'
            value={playerProposal}
            min={0}
            max={endowment}
            onChange={(e) => setPlayerProposal(e.target.value)}
          />
          <Button
            disabled={!canAct}
            onClick={() => {
              setCanAct(false);
              fetchMove(playerProposal.toString());
            }}
          >
            Submit
          </Button>
        </Box>
      ) : (
        <Link component={RouterLink} to={`/`}>
          Return Home
        </Link>
      )}
    </Box>
  );
};

const TrustLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const startGame = async () => {
    try {
      await axios
        .post(
          '/games/start?gameType=trust&player1_type=real&player2_type=minimax'
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
        <Trust />
      )}
    </Box>
  );
};

export default TrustLoader;
