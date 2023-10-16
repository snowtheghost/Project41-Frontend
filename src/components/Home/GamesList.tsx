import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import GameCard from 'src/components/Home/GameCard';

export type Game = {
  gameId: string;
  type: string;
  cost: number;
  players: [];
  state: string;
  capacity: number;
  winners: String[];
};

type Props = {
  games?: Game[]; // TODO: Remove hardcode
};

const GamesList = (props: Props) => {
  return (
    <Box>
      <h2>Active Games:</h2>
      <Grid container>
        <GameCard
          title={`Prisoner's Dilemma`}
          description={`Pit yourself against another person or an AI with a classic game
              of Prisonner's Dilemma!`}
          game={'prisonersdilemma'}
        />
        <GameCard
          title={'Tic-Tac-Toe'}
          description={'Play a classic game of tic-tac-toe!'}
          game={'tictactoe'}
        />
      </Grid>
    </Box>
  );
};

export default GamesList;
