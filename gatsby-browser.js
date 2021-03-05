import React from 'react';
import DarkThemeProvider from './src/provider/DarkThemeProvider';
import StyledThemeProvider from './src/style/StyledThemeProvider';
import GlobalStyle from './src/style/global-theme';
require('prismjs/themes/prism-solarizedlight.css');

export const wrapRootElement = ({ element }) => (
    <DarkThemeProvider>
        <StyledThemeProvider>
            <GlobalStyle />
            {element}
        </StyledThemeProvider>
    </DarkThemeProvider>
);
