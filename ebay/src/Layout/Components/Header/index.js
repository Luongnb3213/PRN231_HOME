import React from 'react';
import Topbar from '../Topbar';
import Bottombar from '../Bottombar';
import Middlebar from '../Middlebar';
const Header = () => {
  return (
    <div>
      <Topbar />
      <Middlebar />
      <Bottombar />
    </div>
  );
};

export default Header;
