import React, { useCallback, useState } from 'react';
import { getInitialProps } from '../repo/app';
import DarkThemeContext from './index';

const DarkThemeProvider: React.FC = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(getInitialProps());

    const setIsDarkModeHandler = useCallback((value: boolean) => {
        setIsDarkMode(value);
    }, []);

    return (
        <DarkThemeContext.Provider
            value={{
                isDarkMode: isDarkMode,
                setIsDarkMode: setIsDarkModeHandler,
            }}
        >
            {children}
        </DarkThemeContext.Provider>
    );
};

export default DarkThemeProvider;
