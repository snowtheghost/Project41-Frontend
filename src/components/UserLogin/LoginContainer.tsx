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
        <Grid item xs={6}>
          <Button
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
      </Grid>
      <Paper
        sx={{
          backgroundColor: '#05004E',
          height: '100%',
          width: '400px',
          display: 'inline-block',
          justifyContent: 'center',
          padding: '24px 0 0 0',
          borderRadius: 4,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <Grid container sx={{ justifyContent: 'center', width: '100%' }}>
          <form onSubmit={(e) => handleLogin(e, email, password, userType)}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: '#EBA6A6', margin: '8px 4px', width: 'auto' }}
              >
                Email:
              </Typography>
            </Grid>
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
                padding: '4px',
                margin: '16px',
                display: 'block',
                backgroundColor: '#76B39D',
                width: '70%',
                fontWeight: 800,
              }}
            >
              Sign In
            </Button>
          </form>
        </Grid>

        <Link
          component={RouterLink}
          sx={{ color: '#EBA6A6', margin: '16px', padding: '8px' }}
          to='/register'
        >
          Don't have an account?
        </Link>
      </Paper>
    </Box>
  );
};

export default LoginContainer;
