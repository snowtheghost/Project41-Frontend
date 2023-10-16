import { useState } from 'react';
import { useQuery } from 'react-query';

import Box from '@mui/material/Box';

import FullPageSpinner from 'src/components/Shared/FullPageSpinner';

type Props = {};

const TicTacToe = (props: Props) => {
  const [canAct, setCanAct] = useState(true);

  let row1 = ['', '', ''];
  let row2 = ['', '', ''];
  let row3 = ['', '', ''];

  return <Box></Box>;
};

const TicTacToeLoader = () => {
  const { isLoading, error } = useQuery('start', () =>
    fetch(
      'https://project41301.onrender.com/games/start?gameType=tictactoe&player1_type=real&player2_type=random'
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (error) {
    return <p>An error has occurred</p>;
  }

  return <TicTacToe />;
};

export default TicTacToeLoader;
