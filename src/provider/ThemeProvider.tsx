import React, { useContext, useMemo } from 'react';
import { ThemeProvider as Provider } from '@emotion/react';
import DarkThemeContext from './DarkThemeProvider/DarkThemeContext';

const color = {
  white: '#fafafa',
  black: '#1e1f21ef',
  yellow: '#fdd804',
  purple: '#6b52f8',
  lightDark: '#e9e9e9f4',
  sky: '#cad6f0c6',
  navy: '#0d225084',
};

const ThemeProvider: React.FC = ({ children }) => {
  const { isDarkMode } = useContext(DarkThemeContext);

  const lightTheme = {
    color: {
      /** representative Color*/
      primary: color.yellow,
      /** dark => dark, light => light */
      main: color.black,
      /** dark => light, light => dark */
      sub: color.white,
      border: '#e4e7e8',
      boxShadow: '#f0f0f0a',
      hoverBg: '#e4e7e899',
      hover: '#2828288c',
      tag: color.navy,
      link: color.lightDark,
      icon: color.yellow,
    },
    isDarkMode,
    origin: {
      color: color,
    },
  };

  const darkTheme = {
    color: {
      /** representative Color*/
      primary: color.purple,
      /** dark => dark, light => light */
      main: color.white,
      /** dark => light, light => dark */
      sub: color.black,
      border: '#353638',
      boxShadow: '#00010311',
      hover: '#c8c8c8c9',
      hoverBg: '#333436ea',
      tag: color.sky,
      link: '#363636ed',
      icon: color.black,
    },
    isDarkMode,
    origin: {
      color: color,
    },
  };

  const theme = useMemo(
    () => (isDarkMode ? darkTheme : lightTheme),
    [isDarkMode],
  );

  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
