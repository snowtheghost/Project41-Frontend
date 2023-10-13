import { useNavigate } from 'react-router-dom';

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
      <Grid
        item
        className='body'
        xs={6}
        sx={{
          display: 'inline-grid',
          justifyContent: 'center',
          padding: '96px 0 0 0',
        }}
      >
        Main body information
      </Grid>
      <Grid
        item
        className='sidebar'
        xs={6}
        sx={{ justifyContent: 'center', padding: '1rem 4rem 4rem 4rem' }}
      >
        <LoginContainer handleLogin={handleLogin} />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
