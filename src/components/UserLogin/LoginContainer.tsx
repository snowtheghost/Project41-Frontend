import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';

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
  const [password, setPassword] = useState(''); // Pretty bad. Find a better solution

  return (
    <Box
      sx={{
        display: 'inline-block',
        justifyContent: 'center',
        padding: '16px 64px 64px 64px',
      }}
    >
      <Typography variant='h4' sx={{ fontWeight: 800, margin: '1rem' }}>
        Login As...
      </Typography>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item xs={6}>
          <Button
            onClick={() => setUserType('Participant')}
            sx={{
              color: userType === 'Participant' ? '#FF0000' : '#05004E',
              backgroundColor: '#76B39D',
              width: '90%',
              fontWeight: 800,
            }}
          >
            Participant
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            onClick={() => setUserType('Researcher')}
            sx={{
              color: userType === 'Researcher' ? '#FF0000' : '#05004E',
              backgroundColor: '#FF9F65',
              width: '90%',
              fontWeight: 800,
            }}
          >
            Researcher
          </Button>
        </Grid>
      </Grid>
      <Paper
        sx={{
          backgroundColor: '#05004E',
          minHeight: '180px',
          width: '400px',
          display: 'inline-block',
          justifyContent: 'center',
          padding: '24px 0 0 0',
        }}
      >
        <Grid container sx={{ justifyContent: 'center' }}>
          <form onSubmit={(e) => handleLogin(e, email, password, userType)}>
            <Typography sx={{ color: '#EBA6A6', margin: '4px' }}>
              Email:
            </Typography>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              required
            />
            <Typography sx={{ color: '#EBA6A6', margin: '4px' }}>
              Password:
            </Typography>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
            <Button
              variant='contained'
              type='submit'
              sx={{
                margin: '4px',
                display: 'block',
                backgroundColor: '#76B39D',
                minWidth: '60%',
                fontWeight: 800,
              }}
            >
              Sign In
            </Button>
          </form>
        </Grid>

        <Link
          component={RouterLink}
          sx={{ color: '#EBA6A6', margin: '8px' }}
          to='/register'
        >
          Don't have an account?
        </Link>
      </Paper>
    </Box>
  );
};

export default LoginContainer;
