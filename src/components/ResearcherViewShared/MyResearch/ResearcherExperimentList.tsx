import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
  experimentList: { gameName: string; participants: number }[];
};

const ResearcherExperimentList = (props: Props) => {
  const { experimentList } = props;
  const experimentSnapshot = experimentList.slice(0, 3);

  return (
    <Box>
      {experimentSnapshot.map((experiment, index) => {
        return (
          <Card variant='outlined' key={index} sx={{ margin: '1rem' }}>
            <CardMedia component='img' />
            <CardContent>
              <Typography sx={{ fontWeight: 800 }}>
                {experiment.gameName}
              </Typography>
              <Typography>Participants: {experiment.participants}</Typography>
            </CardContent>
          </Card>
        );
      })}

      <Link to='/myresearch/experiments'>
        <Typography sx={{ textAlign: 'right', margin: '0 1rem' }}>
          {'Show More >>'}
        </Typography>
      </Link>
    </Box>
  );
};

export default ResearcherExperimentList;
