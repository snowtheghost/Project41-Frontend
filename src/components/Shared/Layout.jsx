import { useNavigate } from 'react-router-dom';

import Header from 'src/components/Shared/Header';

import { isLoggedIn } from '../../utils/auth';
import LogoutButton from '../UserLogin/LogoutButton';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Other layout content */}
      <Header title={'Project 41'} />
      {/* {isLoggedIn() && <LogoutButton navigate={navigate} />} */}
      <div style={{ height: '90%' }}>{children}</div>
    </div>
  );
};

export default Layout;
