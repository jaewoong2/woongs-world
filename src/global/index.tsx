import React from 'react';
import { Global as GlobalTheme, css } from '@emotion/react';

const Global = () => {
  return (
    <GlobalTheme
      styles={css`
        * {
          margin: 0;
          padding: 0;
        }
      `}
    />
  );
};

export default Global;
