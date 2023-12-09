import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import GameSideBar from 'src/components/ParticipantViewShared/[gameID]/GameSidebar/GameSideBar';
import InformedConsent from 'src/components/ParticipantViewShared/[gameID]/Consent/InformedConsent';

const messageStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#F9F8EB',
  border: '2px solid #000',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

const GameConsent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAgree = () => {
    console.log('User agreed to the informed consent');
    handleOpen();
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='message-title'
        aria-describedby='message-description'
      >
        <Box sx={messageStyle}>
          <Typography id='message-title' variant='h6' component='h2'>
            Consent Confirmation
          </Typography>
          <Typography id='message-description' sx={{ mt: 2 }}>
            You have agreed to the Consent Form.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default GameConsent;
