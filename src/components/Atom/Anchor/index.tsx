import React from 'react';
import { Wrapper } from 'components/Atom/Anchor/Anchor.styles';
import { GatsbyLinkProps, Link } from 'gatsby';

interface AnchorProps extends GatsbyLinkProps<unknown> {}

/** Link Component */
const Anchor: React.FC<AnchorProps> = ({
  to,
  key,
  children,
  activeClassName = 'active',
}) => {
  return (
    <Wrapper key={key}>
      <Link className={'link'} activeClassName={activeClassName} to={to}>
        {children}
      </Link>
    </Wrapper>
  );
};

export default Anchor;
