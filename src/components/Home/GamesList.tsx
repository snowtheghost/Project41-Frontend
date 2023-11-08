import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import styled from 'styled-components'

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

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
`;

const GamesList = (props: Props) => {
  const games = [
    { title: "Prisoner's Dilemma", description: "Pit yourself against another person or an AI with a classic game of Prisonner's Dilemma!", game: "prisonersdilemma" },
    { title: "Tic-Tac-Toe", description: "Play a classic game of tic-tac-toe!", game: "tictactoe" },
    { title: "Trust", description: "Play the role of investor or trustee and make your decisions!", game: "trust" },
    { title: "Ultimatum", description: "Step right up and test your negotiation skills in the Ultimatum Game!", game: "ultimatum" },

    // ... other games
  ];
  
  return (
    <Box>
      <TitleContainer>
        <h2>Active Games:</h2>
      </TitleContainer>
      <Grid container rowSpacing = {3}
        sx={{
          pl: '20px',
        }}>
        {games.map((game, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <GameCard {...game} />
          </Grid>
        ))}
    </Grid>
    </Box>
  );
};

export default GamesList;