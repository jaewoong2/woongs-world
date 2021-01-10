import React from 'react';
import DarkThemeProvider from './src/components/provider/DarkThemeProvider';
import StyledThemeProvider from './src/components/style/StyledThemeProvider';
import GlobalStyle from './src/components/style/global-theme';
export const wrapRootElement = ({ element }) => (
    <DarkThemeProvider>
        <StyledThemeProvider>
            <GlobalStyle />
            {element}
        </StyledThemeProvider>
    </DarkThemeProvider>
);
