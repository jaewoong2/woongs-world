import React, { useContext } from 'react';
import { useTheme } from '@emotion/react';
import DarkThemeContext from 'provider/DarkThemeProvider/DarkThemeContext';

interface IelementCotainer {
  element: React.ReactNode;
}

const ElementContainer: React.VFC<IelementCotainer> = ({ element }) => {
  const defaultTheme = useTheme();
  const { isStyleSet } = useContext(DarkThemeContext);

  return <>{isStyleSet && defaultTheme !== null && element}</>;
};

export default React.memo(ElementContainer);
