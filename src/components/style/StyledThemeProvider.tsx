import React, { useContext, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import DarkThemeContext from '../provider';

const StyledThemeProvider: React.FC = ({ children }) => {
    const { isDarkMode } = useContext(DarkThemeContext);
    const color = {
        white: 'rgb(250, 250, 250)',
        black: 'rgb(30, 31, 33)',
        yellow: 'rgb(138, 137, 136)',
    };

    const theme: DefaultTheme = useMemo(
        () => ({
            color: {
                primary: isDarkMode ? color.black : color.white,
                dark: isDarkMode ? color.white : color.black,
                icon: isDarkMode ? color.white : color.black,
                border: isDarkMode ? 'rgb(53, 54, 56)' : 'rgb(228, 231, 232)',
                boxShadow: isDarkMode ? ' rgba(0, 1, 3, 0.07)' : 'rgba(240, 240, 240, 0.04)',
                hoverBackground: isDarkMode ? 'rgba(51, 52, 54, 0.918)' : 'rgba(228, 231, 232, 0.6)',
            },
        }),
        [isDarkMode],
    );

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
