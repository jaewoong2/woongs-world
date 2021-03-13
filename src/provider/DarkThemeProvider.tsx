import React, { useCallback, useState } from 'react';
import { getInitialProps, setThemeProps } from '../repo/app';
import DarkThemeContext from './index';

const DarkThemeProvider: React.FC = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(getInitialProps());

    const setIsDarkModeHandler = useCallback(
        (value: boolean) => {
            setIsDarkMode(value);
            setThemeProps(value);
        },
        [setThemeProps],
    );

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
