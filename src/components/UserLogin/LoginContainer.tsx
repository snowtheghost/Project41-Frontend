import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@mui/material';

export type userType = 'Participant' | 'Researcher';

type Props = {
  handleLogin: (
    event: { preventDefault: () => void },
    email: string,
    password: string,
    userType: userType
  ) => void;
};

const LoginContainer = (props: Props) => {
  const { handleLogin } = props;
  const [userType, setUserType] = useState<userType>('Participant');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid container sx={{ padding: '1rem' }}>
      <Typography variant='h4' sx={{ fontWeight: 800, margin: '1rem' }}>
        Login As...
      </Typography>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid className='Participant-Button' item xs={6}>
          <Button
            onClick={() => setUserType('Participant')}
            sx={{
              color: '#05004E',
              backgroundColor: '#76B39D',
              fontWeight: 800,
              width: '100%',
              border: 3,
              borderBottom: 0,
              borderColor: userType === 'Participant' ? '#05004E' : '#76B39D',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              justifySelf: 'end',
            }}
          >
            Participant
          </Button>
        </Grid>
        <Tooltip title='To be implemented' placement='top'>
          <Grid className='Researcher-Button' item xs={6}>
            <Button
              disabled
              onClick={() => setUserType('Researcher')}
              sx={{
                color: '#05004E',
                backgroundColor: '#FF9F65',
                fontWeight: 800,
                width: '100%',
                border: 3,
                borderBottom: 0,
                borderColor: userType === 'Researcher' ? '#05004E' : '#FF9F65',
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              }}
            >
              Researcher
            </Button>
          </Grid>
        </Tooltip>
      </Grid>
      <Paper
        sx={{
          backgroundColor: '#05004E',
          height: '100%',
          width: '100%',
          display: 'inline-block',
          justifyContent: 'center',
          padding: '2rem 0',
          borderRadius: 4,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <Grid container sx={{ justifyContent: 'center', width: '100%' }}>
          <form
            onSubmit={(e) => handleLogin(e, email, password, userType)}
            style={{ width: '100%', padding: '1rem' }}
          >
            <Grid
              container
              sx={{ justifyContent: 'space-between', padding: '0.5rem 0' }}
            >
              <Typography
                sx={{ color: '#EBA6A6', fontWeight: 800, margin: '0.25rem' }}
              >
                E-mail:
              </Typography>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email'
                required
                style={{ width: '70%' }}
              />
            </Grid>
            <Grid
              container
              sx={{ justifyContent: 'space-between', padding: '0.5rem 0' }}
            >
              <Typography
                sx={{ color: '#EBA6A6', fontWeight: 800, margin: '0.25rem' }}
              >
                Password:
              </Typography>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
                required
                style={{ width: '70%' }}
              />
            </Grid>
            <Button
              variant='contained'
              type='submit'
              sx={{
                margin: '1rem 0',
                backgroundColor:
                  userType === 'Participant' ? '#76B39D' : '#FF9F65',
                width: '100%',
                fontWeight: 800,
              }}
            >
              Sign In
            </Button>
          </form>
        </Grid>

        <Link
          component={RouterLink}
          sx={{ color: '#EBA6A6', margin: '1rem', padding: '0.5rem' }}
          to='/register'
        >
          Don't have an account?
        </Link>
      </Paper>
    </Grid>
  );
};

export default LoginContainer;
