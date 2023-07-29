// Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">UserForm</Link>
        </li>
        <li>
          <Link to="/s">SignIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
