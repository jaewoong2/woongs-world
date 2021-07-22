import React from 'react';
import { Code } from './Tag.styles';

const Tag: React.FC = ({ children }) => {
  return <Code>{children}</Code>;
};

export default Tag;
