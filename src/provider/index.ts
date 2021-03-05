import { createContext } from 'react';

interface ThemeContextTypes {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

const initialState: ThemeContextTypes = {
    isDarkMode: false,
    setIsDarkMode: () => true,
};

const DarkThemeContext = createContext<ThemeContextTypes>(initialState);

export default DarkThemeContext;
