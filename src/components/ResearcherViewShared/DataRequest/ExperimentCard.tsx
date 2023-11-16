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

const ExperimentCard = (props: Props) => {
  const { title, description, game } = props;

  return (
    <Card
      sx={{
        margin: '0 1.5rem',
        Width: '15rem',
        minWidth: '15rem',
        maxWidth: '15rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography sx={{ fontSize: 24, fontWeight: 800 }} gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 18, fontWeight: 500 }}>
          Description:
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1.5 }}>
          {description}
        </Typography>
        <Link
          component={RouterLink}
          to={`/datarequest/${game}`}
          sx={{ mt: 'auto' }}
        >
          View Results
        </Link>
      </CardContent>
    </Card>
  );
};

export default ExperimentCard;
