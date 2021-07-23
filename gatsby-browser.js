export const wrapRootElement = ({ element }) => (
  <DarkThemeProvider>
    <StyledThemeProvider>
      <GlobalStyle />
      <ElementContainer element={element} />
    </StyledThemeProvider>
  </DarkThemeProvider>
);
