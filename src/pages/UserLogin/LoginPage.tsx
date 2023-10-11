import React, { useState } from 'react';
import axios from '../../utils/axiosInstance';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // TODO: THIS TYPING IS HORRIBLE. FIX THIS.
  // We should also move this into a hook instead of keeping it in here.
  const handleLogin = async (event: { preventDefault: () => void }) => {
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <Button variant='contained'>Login</Button>
        {/* <button type='submit'>Login</button> */}
      </form>
      <p>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
