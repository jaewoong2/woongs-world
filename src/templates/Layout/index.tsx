import React, { useContext } from 'react';
import DarkThemeContext from '../../provider';
import HeadNav from '../HeadNav';
import { MainContainer, MainSection, SideSection } from './styles';

const MainComponent: React.FC = ({ children }) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkThemeContext);
    return (
        <MainContainer>
            <div className="main-container">
                <HeadNav
                    setIsDarkMode={setIsDarkMode}
                    isDarkMode={isDarkMode}
                    headers={['tsl', 'about', 'dev', 'algorithm']}
                />
                <div className="section-container">
                    <SideSection></SideSection>
                    <MainSection>{children}</MainSection>
                </div>
            </div>
        </MainContainer>
    );
};

export default MainComponent;
