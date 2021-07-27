import React, { useContext, useEffect } from 'react';
import { Global as GlobalTheme, css, useTheme } from '@emotion/react';
import DarkThemeContext from 'provider/DarkThemeProvider/DarkThemeContext';
import { defaultTheme } from 'type';
import { useMemo } from 'react';

const Global = () => {
  const { setIsStyleSetHandler } = useContext(DarkThemeContext);
  const theme = useTheme() as defaultTheme;
  // ThemeProvider => Global Component Setting
  useEffect(() => {
    setIsStyleSetHandler(true);
  }, []);

  const styles = useMemo(() => {
    return css`
      * {
        font-size: 18px;
        margin: 0;
        box-sizing: inherit;
        padding: 0;
        font-family: 'Roboto', 'Noto Sans KR', sans-serif;
        border-color: ${theme.color.border} !important;
      }
      h1,
      h2,
      h3,
      h4 {
        font-weight: 300;
        font-family: 'Roboto', 'Noto Sans KR', sans-serif;
      }
      a {
        text-decoration: none;
      }
      html {
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        overflow-y: scroll;
        transition: background-color 0.35s linear, color 0.35s linear;
        background-color: ${theme.color.main};
        @media screen and (max-width: 450px) {
          font-size: 13px;
        }
      }
      body {
        text-shadow: 0 0 0.1px rgba(0, 0, 0, 0.3);
        -webkit-text-size-adjust: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing: antialiased;
        text-rendering: optimizelegibility;
      }
    `;
  }, [theme]);

  return <GlobalTheme styles={styles} />;
};

export default Global;
