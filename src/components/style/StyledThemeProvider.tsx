import React, { useContext, useMemo } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import DarkThemeContext from '../provider';

const StyledThemeProvider: React.FC = ({ children }) => {
    const { isDarkMode } = useContext(DarkThemeContext);

    const theme: DefaultTheme = useMemo(() => ({
        color: {
            primary: isDarkMode ? 'rgb(5, 5, 5)' : 'rgb(250, 250, 250)',
            dark: isDarkMode? 'rgb(250, 250, 250)' : 'rgb(5, 5, 5)',
          },
    }), [isDarkMode]);
    
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default StyledThemeProvider
