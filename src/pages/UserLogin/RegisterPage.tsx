import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import axios from 'src/utils/axiosInstance';
import RegisterContainer, {
  userType,
} from 'src/components/UserLogin/RegisterContainer';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  // THIS TYPING IS BAD. FIX THIS.
  const handleRegister = async (
    event: { preventDefault: () => void },
    username: string,
    email: string,
    password: string,
    userType: userType
  ) => {
    event.preventDefault();

    try {
      // Make the API request to register the user
      const response = await axios.post('/users/register', {
        username,
        email,
        password,
      });
      const token = response.data.token;
      // Handle successful registration or any additional logic
      localStorage.setItem('token', token);
      // Redirect the user to the homepage or any other desired page
      navigate('/');
    } catch (error) {
      // Handle registration errors, e.g., display an error message to the user
      console.error(error);
      setErrorMessage('Registration failed. Please try again.');
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
        <RegisterContainer handleRegister={handleRegister} />
        {errorMessage && <Typography>{errorMessage}</Typography>}
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
