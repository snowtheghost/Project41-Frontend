import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../utils/axiosInstance';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // THIS TYPING IS BAD. FIX THIS.
  const handleRegister = async (event: { preventDefault: () => void }) => {
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
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type='username'
          name='username'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Register</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
