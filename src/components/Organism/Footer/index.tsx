import { FooterPharaGraph } from './Footer.styles';
import React from 'react';

const Footer: React.FC = ({ children }) => {
  return (
    <footer>
      <FooterPharaGraph>{children}</FooterPharaGraph>
    </footer>
  );
};

export default Footer;
