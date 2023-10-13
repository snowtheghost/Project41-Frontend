import { Link, useNavigate } from 'react-router-dom';

import Header from 'src/components/Shared/Header';

import { isLoggedIn } from '../../utils/auth';
import LogoutButton from '../UserLogin/LogoutButton';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Other layout content */}
      <Header title={'Project 41'} />
      {isLoggedIn() && <LogoutButton navigate={navigate} />}
      {isLoggedIn() && (
        <nav>
          <ul>
            <li>
              <Link to='/funds'>Funds</Link>
            </li>
          </ul>
        </nav>
      )}
      <div style={{ height: '90%' }}>{children}</div>
    </div>
  );
};

export default Layout;
