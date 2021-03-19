import { createContext } from 'react';
import { getInitialProps } from '../repo/app';

interface ThemeContextTypes {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
    isStyleSet: boolean;
    setIsStyleSetHandler: (value: boolean) => void;
}

const initialState: ThemeContextTypes = {
    isDarkMode: getInitialProps(),
    setIsDarkMode: () => true,
    isStyleSet: false,
    setIsStyleSetHandler: () => true,
};

const DarkThemeContext = createContext<ThemeContextTypes>(initialState);

export default DarkThemeContext;
