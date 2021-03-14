import React, { useContext, useMemo } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import DarkThemeContext from '../provider';

const StyledThemeProvider: React.FC = ({ children }) => {
    const { isDarkMode } = useContext(DarkThemeContext);
    const color = {
        white: 'rgb(250, 250, 250)',
        black: 'rgb(30, 31, 33, 0.94)',
        yellow: 'rgb(253, 216, 4)',
        purple: 'rgba(107, 82, 248, 1)',
        whiteDarker: 'rgba(233, 233, 233, 0.96)',
    };

    const theme: DefaultTheme = useMemo(
        () => ({
            isDarkMode: isDarkMode,
            color: {
                ...color,
                representativeColor: isDarkMode ? color.yellow : color.purple,
                linkColor: isDarkMode ? 'rgba(54, 54, 54, 0.93)' : color.whiteDarker,
                tagColor: isDarkMode ? 'rgba(202, 214, 240, 0.78)' : 'rgba(13, 34, 80, 0.52)',
                hoverColor: isDarkMode ? 'rgba(200, 200, 200, 0.79)' : 'rgba(40, 40, 40, 0.55)',
                primary: isDarkMode ? color.black : color.white,
                dark: isDarkMode ? color.white : color.black,
                icon: isDarkMode ? color.yellow : color.black,
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
