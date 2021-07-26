import Card from 'components/Organism/Card';
import Header from 'components/Organism/Header';
import DarkThemeContext from 'provider/DarkThemeProvider/DarkThemeContext';
import React from 'react';
import { useContext } from 'react';
import { useCallback } from 'react';

const Layout: React.FC = ({ children }) => {
  const { setIsDarkMode, isDarkMode } = useContext(DarkThemeContext);
  const onClickToggle = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  return (
    <main style={{ display: 'flex' }}>
      <div style={{ width: `16%` }}>
        <Card />
      </div>
      <div style={{ width: '67%' }}>
        <Header
          isDarkMode={isDarkMode}
          onClickToggle={onClickToggle}
          headerItems={['til', 'dev', 'algorithm', 'about']}
        />
      </div>
    </main>
  );
};

export default Layout;
