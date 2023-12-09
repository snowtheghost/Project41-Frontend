import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'src/utils/axiosInstance';
import FullPageSpinner from 'src/components/Shared/FullPageSpinner';
import { userType } from 'src/components/UserLogin/RegisterContainer';

type Props = {
  userType: userType;
};

const DeleteAccountFlow = (props: Props) => {
  const { userType } = props;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete('/users');
      localStorage.removeItem('token');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        sx={{
          'marginTop': '2.5rem',
          'margin': '1rem',
          'width': '100%',
          'backgroundColor': '#cb2e2e',
          'color': '#f9f8eb',
          ':hover': { backgroundColor: '#e27c7c' },
        }}
        onClick={() => setOpen(true)}
      >
        Delete Account
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
        <DialogContent>
          {userType === 'PLAYER'
            ? 'All your progress and points will be removed once deleted. Any data collected by a researcher will remain unless you opt out of an experiment! If you wish opt out after deleting your account, contact the researcher via email or through our feedback form to withdraw from an experiment.'
            : 'By deleting your account you will lose action to all the games and research you deployed from using this account!'}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Back</Button>
          <Button
            onClick={() => handleDelete()}
            sx={{
              'backgroundColor': '#ff0000',
              'color': '#f9f8eb',
              ':hover': { backgroundColor: '#e27c7c' },
            }}
          >
            {isLoading ? <FullPageSpinner /> : 'Delete Account'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteAccountFlow;
