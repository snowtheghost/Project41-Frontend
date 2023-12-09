import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import { isLoggedIn, logout } from 'src/utils/auth';

type Props = {
  title: String;
};

const Header = (props: Props) => {
  const { title } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    window.location.reload();
  };

  return (
    <Grid
      sx={{
        backgroundColor: '#05004E',
        width: '100%',
        height: '10%',
        padding: '1.5rem 0',
      }}
      container
    >
      <Grid item>
        <Link
          component={RouterLink}
          to='/'
          sx={{
            color: '#EBA6A6',
            fontSize: '1.1rem',
            fontWeight: 800,
            textDecoration: 'none',
            margin: '0 1.5rem',
          }}
        >
          {title}
        </Link>
      </Grid>
      {isLoggedIn() && (
        <Grid item>
          <Button sx={{}} onClick={handleLogout}>
            Logout
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Header;
