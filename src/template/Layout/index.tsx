import React from 'react';
import Global from '../../global';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global />
      {children}
    </>
  );
};

export default Layout;
