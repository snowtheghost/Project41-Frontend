import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
        minHeight: '10%',
      }}
    >
      <Typography
        sx={{
          color: '#EBA6A6',
          padding: '16px',
          fontSize: '1.1rem',
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
