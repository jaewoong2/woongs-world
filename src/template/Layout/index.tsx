import Card from 'components/Organism/Card';
import Footer from 'components/Organism/Footer';
import Header from 'components/Organism/Header';
import DarkThemeContext from 'provider/DarkThemeProvider/DarkThemeContext';
import React from 'react';
import { useContext } from 'react';
import { useCallback } from 'react';
import {
  MainSectionContainer,
  Section,
  SectionWrapper,
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
        <SectionWrapper>
          <SideSection>
            <Card />
          </SideSection>
          <Section>{children}</Section>
        </SectionWrapper>
        <Footer>{new Date().getFullYear()}- designed by @jaewoong2</Footer>
      </MainSectionContainer>
    </Wrapper>
  );
};

export default Layout;
