import Card from 'components/Organism/Card';
import Header from 'components/Organism/Header';
import DarkThemeContext from 'provider/DarkThemeProvider/DarkThemeContext';
import React from 'react';
import { useContext } from 'react';
import { useCallback } from 'react';
import {
  MainSectionContainer,
  Section,
  SideSection,
  Wrapper,
} from './Layout.styles';

const Layout: React.FC = ({ children }) => {
  const { setIsDarkMode, isDarkMode } = useContext(DarkThemeContext);
  const onClickToggle = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  return (
    <Wrapper>
      <MainSectionContainer>
        <Header
          isDarkMode={isDarkMode}
          onClickToggle={onClickToggle}
          headerItems={['til', 'dev', 'algorithm', 'about']}
        />
        <SideSection>
          <Card />
        </SideSection>
        <Section>{children}</Section>
      </MainSectionContainer>
    </Wrapper>
  );
};

export default Layout;
