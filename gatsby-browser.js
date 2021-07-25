import DarkThemeProvider from './src/provider/DarkThemeProvider/DarkThemeProvider.tsx';
import ThemeProvider from './src/provider/ThemeProvider.tsx';
import ElementContainer from './src/utils/ElementContainer.tsx';
import Global from './src/global/index.tsx';

export const wrapRootElement = ({ element }) => (
  <DarkThemeProvider>
    <ThemeProvider>
      <Global />
      <ElementContainer element={element} />
    </ThemeProvider>
  </DarkThemeProvider>
);
