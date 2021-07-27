import React from 'react';
import { Wrapper } from 'components/Atom/Anchor/Anchor.styles';
import { Link } from 'gatsby';

interface AnchorProps {
  to: string;
  activeClassName?: string;
}

/** Link Component */
const Anchor: React.FC<AnchorProps> = ({
  to,
  children,
  activeClassName = 'active',
}) => {
  return (
    <Wrapper key={to}>
      <Link
        key={to}
        className={'link'}
        activeClassName={activeClassName}
        to={to}
      >
        {children}
      </Link>
    </Wrapper>
  );
};

export default Anchor;
