import Box from '@mui/material/Box';
import React from 'react';
import GameSideBar from 'src/components/ParticipantViewShared/GameSideBar';
import InformedConsent from 'src/components/ParticipantViewShared/InformedConsent';


const GameConsent: React.FC = () =>{

  // Handle the agree action
  const handleAgree = () => {
    console.log('User agreed to the informed consent');
    // Navigate to the next page or perform another action here
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        backgroundColor: '#F9F8EB',
        width: '100%',
        height: '100vh',
      }}
    >
      <GameSideBar />
      <InformedConsent onAgree={handleAgree} />

    </Box>
  );
};

export default GameConsent;