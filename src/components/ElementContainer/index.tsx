import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import DarkThemeContext from '../../provider';

interface IelementCotainer {
    element: React.ReactNode;
}

const ElementContainer: React.VFC<IelementCotainer> = ({ element }) => {
    const defaultTheme = useTheme();
    const { isStyleSet } = useContext(DarkThemeContext);

    return <>{isStyleSet && defaultTheme !== null && element}</>;
};

export default ElementContainer;
