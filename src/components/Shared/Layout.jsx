import { Link, useNavigate } from 'react-router-dom';

import Header from 'src/components/Shared/Header';

import { isLoggedIn } from '../../utils/auth';
import LogoutButton from '../UserLogin/LogoutButton';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div style={{ height: 'inherit' }}>
      {/* Other layout content */}
      {isLoggedIn() && <LogoutButton navigate={navigate} />}
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Header title={'Project 41'} />
      </Link>
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
