import React from 'react';
import { Code } from './Tag.styles';

interface TagProps extends React.HTMLAttributes<unknown> {}

const Tag: React.FC<TagProps> = ({ children, ...props }) => {
  return <Code {...props}>{children}</Code>;
};

export default Tag;
