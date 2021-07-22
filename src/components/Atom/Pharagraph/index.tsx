import React from 'react';
import { P } from 'components/Atom/Pharagraph/P.styles';

interface PharaGraphProps extends React.AnchorHTMLAttributes<unknown> {
  fontSize: number | string;
}

const PharaGraph: React.FC<PharaGraphProps> = ({
  children,
  fontSize,
  ...props
}) => {
  return (
    <P
      {...props}
      fontSize={`${
        typeof fontSize === 'string' ? fontSize : `${fontSize} + px`
      }`}
    >
      {children}
    </P>
  );
};

export default PharaGraph;
