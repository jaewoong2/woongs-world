import React, { useContext, useMemo } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import DarkThemeContext from '../provider';

const StyledThemeProvider: React.FC = ({ children }) => {
    const { isDarkMode } = useContext(DarkThemeContext);
    const color = {
        white: "rgb(250, 250, 250)",
        black: "rgb(30, 31, 33)",
        yellow: "rgb(240, 200, 30)"
    }

    const theme: DefaultTheme = useMemo(() => ({
        color: {
            primary: isDarkMode ? color.black : color.white,
            dark: isDarkMode? color.white : color.black,
            icon: isDarkMode? color.yellow : color.black,
          },
    }), [isDarkMode]);
    
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default StyledThemeProvider
