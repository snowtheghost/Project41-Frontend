import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import AvatarPhoto from 'src/components/Assets/AvatarPhoto';

type Props = {
  name?: string;
  researchPreference?: string;
  totalExperiments?: number;
  totalParticipants?: number;
};

const ResearcherProfileInfo = (props: Props) => {
  const {
    name = '',
    researchPreference = 'N/A',
    totalExperiments = 0,
    totalParticipants = 0,
  } = props;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar
          sx={{ minWidth: '128px', minHeight: '128px', margin: '0.5rem' }}
        >
          <AvatarPhoto />
        </Avatar>
      </Grid>
      <Grid item>
        <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>
          Name: {name}
        </Typography>
        <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>
          Research Preference: {researchPreference}
        </Typography>
        <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>
          Total Experiments: {totalExperiments}
        </Typography>
        <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>
          Total Participants: {totalParticipants}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ResearcherProfileInfo;
