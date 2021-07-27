import React, { useContext, useMemo } from 'react';
import { ThemeProvider as Provider } from '@emotion/react';
import DarkThemeContext from './DarkThemeProvider/DarkThemeContext';
import { color, darkTheme, lightTheme } from '../repo';

const ThemeProvider: React.FC = ({ children }) => {
  const { isDarkMode } = useContext(DarkThemeContext);

  const theme = useMemo(
    () =>
      isDarkMode
        ? {
            ...darkTheme,
            isDarkMode,
            origin: {
              color: color,
            },
          }
        : {
            ...lightTheme,
            isDarkMode,
            origin: {
              color: color,
            },
          },
    [isDarkMode],
  );

  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
