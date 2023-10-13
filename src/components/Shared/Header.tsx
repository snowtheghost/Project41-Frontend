import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

type Props = {
  title: String;
};

const Header = (props: Props) => {
  const { title } = props;

  return (
    <Box
      sx={{
        backgroundColor: '#05004E',
        width: '100%',
        maxHeight: '10%',
        padding: '1.5rem',
      }}
    >
      <Link
        component={RouterLink}
        to='/'
        sx={{
          color: '#EBA6A6',
          fontSize: '1.1rem',
          fontWeight: 800,
          textDecoration: 'none',
        }}
      >
        {title}
      </Link>
    </Box>
  );
};

export default Header;
