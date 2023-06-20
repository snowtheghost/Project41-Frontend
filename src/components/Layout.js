import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';
import LogoutButton from './LogoutButton';

const Layout = ({ children }) => {
const navigate = useNavigate();
  return (
    <div>
      {/* Other layout content */}
      {isLoggedIn() && <LogoutButton navigate={navigate} />}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
