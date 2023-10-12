import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import LoginContainer from 'src/components/UserLogin/LoginContainer';

import axios from '../../utils/axiosInstance';

const LoginPage = () => {
  const navigate = useNavigate();

  // TODO: Event PARAMETER TYPING IS HORRIBLE. FIX THIS.
  // We should also move this into a hook instead of keeping it in here.
  const handleLogin = async (
    event: { preventDefault: () => void },
    email: string,
    password: string,
    userType: string
  ) => {
    event.preventDefault();

    try {
      const response = await axios.post('/users/login', { email, password });
      const token = response.data.token;
      // Store the token in local storage
      localStorage.setItem('token', token);
      // Redirect the user to the homepage or any other desired page
      navigate('/');
    } catch (error) {
      // Handle login errors
      console.error(error);
    }
  };

  return (
    <Grid
      container
      sx={{
        display: 'inline-flex',
        backgroundColor: '#F9F8EB',
        width: '100%',
        height: '100%',
      }}
    >
      <Box
        className='body'
        sx={{
          width: '50%',
          display: 'inline-grid',
          justifyContent: 'center',
          padding: '96px 0 0 0',
        }}
      >
        Main body information
      </Box>
      <Box className='sidebar' sx={{ width: '50%', justifyContent: 'center' }}>
        <LoginContainer handleLogin={handleLogin} />
      </Box>
    </Grid>
  );
};

export default LoginPage;
