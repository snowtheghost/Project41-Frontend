import { Link as RouterLink } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  description: string;
  game: string;
};

const GameCard = (props: Props) => {
  const { title, description, game } = props;

  return (
    <Card sx={{ margin: '0 1.5rem' }}>
      <CardContent sx={{ width: '15rem' }}>
        <Typography sx={{ fontSize: 24, fontWeight: 800 }} gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 16, color: 'text.secondary', mb: 1.5 }}>
          {description}
        </Typography>
        <Link component={RouterLink} to={`/games/${game}`}>
          Play Game
        </Link>
      </CardContent>
    </Card>
  );
};

export default GameCard;
