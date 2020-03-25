import React from 'react';
import './layout.css';
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
