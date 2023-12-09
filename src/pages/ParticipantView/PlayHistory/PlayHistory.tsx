import GamesList from 'src/components/ParticipantViewShared/GamesList';
import ParticipantSideBar from '../../../components/ParticipantViewShared/ParticipantSideBar';
import Box from '@mui/material/Box';

const PlayHistory = () => {
  // TODO: Add once we are ready to remove the static screens
  // const isLoggedIn = !!localStorage.getItem('token');
  // if (!isLoggedIn) {
  //   return <Navigate to='/' />;
  // }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        backgroundColor: '#F9F8EB',
        width: '100%',
        height: '100vh',
      }}
    >
      <ParticipantSideBar />
      {/* // TODO: add games={gamesData} for play history games */}
      <GamesList />
    </Box>
  );
};

export default PlayHistory;
