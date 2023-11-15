import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import axios from 'src/utils/axiosInstance';

export type userType = 'PLAYER' | 'RESEARCHER';

const RegisterContainer = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<userType>('PLAYER');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // THIS TYPING IS BAD. FIX THIS.
  const handleRegister = async (
    event: { preventDefault: () => void },
    username: string,
    email: string,
    password: string,
    type: userType
  ) => {
    event.preventDefault();

    try {
      setIsLoggingIn(true);
      // Make the API request to register the user
      const response = await axios.post('/users/register', {
        username,
        email,
        password,
        type,
      });
      const token = response.data.token;
      // Handle successful registration or any additional logic
      localStorage.setItem('token', token);
      // Redirect the user to the homepage or any other desired page
      navigate('/');
    } catch (error) {
      setIsLoggingIn(false);
      // Handle registration errors, e.g., display an error message to the user
      console.error(error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <Grid container sx={{ padding: '1rem' }}>
      <Typography variant='h4' sx={{ fontWeight: 800, margin: '1rem' }}>
        Register As...
      </Typography>
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid className='Participant-Button' item xs={6}>
          <Button
            onClick={() => setUserType('PLAYER')}
            sx={{
              color: '#05004E',
              backgroundColor: '#76B39D',
              fontWeight: 800,
              width: '100%',
              border: 3,
              borderBottom: 0,
              borderColor: userType === 'PLAYER' ? '#05004E' : '#76B39D',
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
              onClick={() => setUserType('RESEARCHER')}
              sx={{
                color: '#05004E',
                backgroundColor: '#FF9F65',
                fontWeight: 800,
                width: '100%',
                border: 3,
                borderBottom: 0,
                borderColor: userType === 'RESEARCHER' ? '#05004E' : '#FF9F65',
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
            onSubmit={(e) => {
              handleRegister(e, username, email, password, userType);
              setIsLoggingIn(true);
            }}
            style={{ width: '100%', padding: '1rem' }}
          >
            <Grid
              container
              sx={{ justifyContent: 'space-between', padding: '0.5rem 0' }}
            >
              <Typography
                sx={{ color: '#EBA6A6', fontWeight: 800, margin: '0.25rem' }}
              >
                Username:
              </Typography>
              <input
                type='username'
                name='username'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                backgroundColor: userType === 'PLAYER' ? '#76B39D' : '#FF9F65',
                width: '100%',
                fontWeight: 800,
              }}
            >
              {isLoggingIn ? <CircularProgress /> : 'Register'}
            </Button>
          </form>
          {errorMessage && (
            <Typography sx={{ color: '#FF0000', margin: '0 1rem' }}>
              {errorMessage}
            </Typography>
          )}
        </Grid>

        <Link
          component={RouterLink}
          sx={{ color: '#EBA6A6', margin: '1rem', padding: '0.5rem' }}
          to='/login'
        >
          Already have an account?
        </Link>
      </Paper>
    </Grid>
  );
};

export default RegisterContainer;
