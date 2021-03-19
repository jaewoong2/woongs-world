import React, { useCallback, useState } from 'react';
import { getInitialProps, setThemeProps } from '../repo/app';
import DarkThemeContext from './index';

const DarkThemeProvider: React.FC = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialProps());
    const [isStyleSet, setIsStyleSet] = useState<boolean>(false);

    const setIsDarkModeHandler = useCallback(
        (value: boolean) => {
            setIsDarkMode(value);
            setThemeProps(value);
        },
        [setThemeProps],
    );

    const setIsStyleSetHandler = useCallback((bool: boolean) => {
        setIsStyleSet(bool);
    }, []);

    return (
        <DarkThemeContext.Provider
            value={{
                isStyleSet,
                setIsStyleSetHandler,
                isDarkMode,
                setIsDarkMode: setIsDarkModeHandler,
            }}
        >
            {children}
        </DarkThemeContext.Provider>
    );
};

export default DarkThemeProvider;
