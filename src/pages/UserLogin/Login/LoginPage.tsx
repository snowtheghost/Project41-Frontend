import Grid from '@mui/material/Grid';

import LoginContainer from 'src/components/UserLogin/LoginContainer';

const LoginPage = () => {
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
        <LoginContainer />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
