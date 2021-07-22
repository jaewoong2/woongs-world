import React from 'react';
import { A } from 'components/Atom/Anchor/Anchor.styles';
import { GatsbyLinkProps } from 'gatsby';

interface AnchorProps extends GatsbyLinkProps<unknown> {}

/** Link Component */
const Anchor: React.FC<AnchorProps> = ({
  to,
  key,
  children,
  activeClassName = 'active',
}) => {
  return (
    <A to={to} key={key} activeClassName={activeClassName}>
      {children}
    </A>
  );
};

export default Anchor;
