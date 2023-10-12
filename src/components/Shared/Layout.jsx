import { Link, useNavigate } from 'react-router-dom';

import Header from 'src/components/Shared/Header';

import { isLoggedIn } from '../../utils/auth';
import LogoutButton from '../UserLogin/LogoutButton';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Other layout content */}
      {isLoggedIn() && <LogoutButton navigate={navigate} />}
      <Header title={'Project 41'} />
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {isLoggedIn() && (
            <li>
              <Link to='/funds'>Funds</Link>
            </li>
          )}
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
