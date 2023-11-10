import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

const LandingPage = () => {
  return (
    <Box sx={{ margin: '0 1.5rem' }}>
      <div>
        <p>Sign in or register to join a game:</p>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
        <p>
          Redirect to the Game Library{' '}
          <Link to='/gamelibrary'>Game Library</Link>
        </p>
        <p>
          Redirect to the Researcher View{' '}
          <Link to='/myresearch'>Researcher View</Link>
        </p>
        <p>
          Redirect to the Game Home Page{' '}
          <Link to='/:gameId/home'>Game Home Page</Link>
        </p>
      </div>
    </Box>
  );
};

export default LandingPage;
