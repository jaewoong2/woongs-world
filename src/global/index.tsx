import React, { useContext, useEffect } from 'react';
import { Global as GlobalTheme, css } from '@emotion/react';
import DarkThemeContext from 'provider/DarkThemeProvider/DarkThemeContext';

const Global = () => {
  const { setIsStyleSetHandler } = useContext(DarkThemeContext);

  useEffect(() => {
    setIsStyleSetHandler(true);
  }, []);

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
