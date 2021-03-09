import { createContext } from 'react';

interface ThemeContextTypes {
    isDarkMode: boolean;
    setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: ThemeContextTypes = {
    isDarkMode: false,
    setIsDarkMode: () => true,
};

const DarkThemeContext = createContext<ThemeContextTypes>(initialState);

export default DarkThemeContext;
