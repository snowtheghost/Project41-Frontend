import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import AvatarPhoto from 'src/components/Assets/AvatarPhoto';

type Props = {
  name: string;
};

const ParticipantProfileInfo = (props: Props) => {
  const { name } = props;

  // Buttons are disabled until their functionality is implemented.
  // Please remove tooltips when done so.

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Avatar
          sx={{
            minWidth: '128px',
            minHeight: '128px',
            margin: '0.5rem',
            boxShadow: 3,
            border: '4px solid black',
          }}
        >
          <AvatarPhoto />
        </Avatar>
      </Grid>
      <Grid item sx={{ margin: '1rem' }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>
          Name: {name}
        </Typography>
        <Typography sx={{ fontSize: '24px', fontWeight: 800 }}>
          Participated Experiments: {0}
        </Typography>
      </Grid>
      <Grid container item spacing={1} direction={'column'}>
        <Grid item>
          <Tooltip
            title={'To be Implemented in Future Update'}
            placement={'right'}
          >
            <span>
              <Button
                disabled
                sx={{
                  color: '#05004E',
                  backgroundColor: '#EBA6A6',
                  minWidth: '180px',
                }}
                onClick={() => {}}
              >
                Change Avatar
              </Button>
            </span>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip
            title={'To be Implemented in Future Update'}
            placement={'right'}
          >
            <span>
              <Button
                disabled
                sx={{
                  color: '#05004E',
                  backgroundColor: '#EBA6A6',
                  minWidth: '180px',
                }}
                onClick={() => {}}
              >
                Change Username
              </Button>
            </span>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip
            title={'To be Implemented in Future Update'}
            placement={'right'}
          >
            <span>
              <Button
                disabled
                sx={{
                  color: '#05004E',
                  backgroundColor: '#EBA6A6',
                  minWidth: '180px',
                }}
                onClick={() => {}}
              >
                Change Password
              </Button>
            </span>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ParticipantProfileInfo;
