import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import styledcomp from 'styled-components';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import GameCard from 'src/components/Home/GameCard';
import Typography from '@mui/material/Typography';

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

const TitleContainer = styledcomp.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 40px;
`;

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  marginTop: '20px',
  width: '94%',
  height: '50px',
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5),
  border: `2px solid #05004E`,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  'color': 'inherit',
  'width': '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
    paddingRight: theme.spacing(4),
    width: '100%',
  },
}));

const GamesList = (props: Props) => {
  const games = [
    {
      title: "Prisoner's Dilemma",
      description:
        "Pit yourself against another person or an AI with a classic game of Prisonner's Dilemma!",
      game: 'prisonersdilemma',
    },
    {
      title: 'Tic-Tac-Toe',
      description: 'Play a classic game of tic-tac-toe!',
      game: 'tictactoe',
    },
    {
      title: 'Trust',
      description:
        'Play the role of investor or trustee and make your decisions!',
      game: 'trust',
    },
    {
      title: 'Ultimatum',
      description:
        'Step right up and test your negotiation skills in the Ultimatum Game!',
      game: 'ultimatum',
    },

    // ... other games
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Search>
        <SearchIconWrapper>
          <IconButton aria-label='search'>
            <SearchIcon />
          </IconButton>
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search for games...'
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchChange}
        />
      </Search>
      <TitleContainer>
        <h2>Active Games:</h2>
      </TitleContainer>
      <Grid container rowSpacing={3} sx={{ pl: '20px', width: '100%' }}>
        {filteredGames.length > 0 ? (
          filteredGames.map((game, index) => (
            <Grid item key={index}>
              <GameCard {...game} />
            </Grid>
          ))
        ) : (
          <Typography
            variant='subtitle1'
            color='text.secondary'
            paddingLeft={4}
            paddingTop={2}
          >
            No games found...
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default GamesList;
