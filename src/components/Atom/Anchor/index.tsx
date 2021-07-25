import React from 'react';
import { A } from 'components/Atom/Anchor/Anchor.styles';
import { GatsbyLinkProps } from 'gatsby';
import { useTheme } from '@emotion/react';
import { defaultTheme } from 'type';

interface AnchorProps extends GatsbyLinkProps<unknown> {}

/** Link Component */
const Anchor: React.FC<AnchorProps> = ({
  to,
  key,
  children,
  activeClassName = 'active',
}) => {
  const { theme } = useTheme() as defaultTheme;

  return (
    <A theme={theme} to={to} key={key} activeClassName={activeClassName}>
      {children}
    </A>
  );
};

export default Anchor;
