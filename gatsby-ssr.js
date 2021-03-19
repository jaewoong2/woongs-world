import React from 'react';
import DarkThemeProvider from './src/provider/DarkThemeProvider';
import StyledThemeProvider from './src/style/StyledThemeProvider';
import GlobalStyle from './src/style/GlobalTheme';
import ElementContainer from './src/components/ElementContainer';

export const wrapRootElement = ({ element }) => (
    <DarkThemeProvider>
        <StyledThemeProvider>
            <GlobalStyle />
            <ElementContainer element={element} />
        </StyledThemeProvider>
    </DarkThemeProvider>
);
