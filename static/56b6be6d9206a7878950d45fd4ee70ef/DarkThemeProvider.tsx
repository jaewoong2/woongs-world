import React, { useState } from 'react';
import DarkThemeContext from './index';

const DarkThemeProvider: React.FC = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <DarkThemeContext.Provider
            value={{
                isDarkMode,
                setIsDarkMode,
            }}
        >
            {children}
        </DarkThemeContext.Provider>
    );
};

export default DarkThemeProvider;
