import React, { useCallback, useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { RiMoonClearFill } from 'react-icons/ri';
import { FaSun } from 'react-icons/fa';
import DarkThemeContext from './provider';
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;

    .nav-container {
        width: 100%;
        padding: 10px;
        max-width: 700px;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .nav-sub {
            display: flex;
            height: 100%;
            align-items: center;
            .link-about {
                margin-right: 10px;
            }
            .theme-icon {
                margin-right: 10px;
                font-size: 1.3em;
                cursor: pointer;
            }
            .moon {
                filter: drop-shadow(2px 2px 4px rgba(20, 20, 30, 0.4));
                color: ${({ theme }) => theme.color.dark};
                &:hover {
                    filter: drop-shadow(2px 2px 4px rgba(20, 20, 30, 0.4)) brightness(1.5);
                    transition: transform 0.5s linear;
                }
                transition: transform 0.5s linear;
            }
            .sun {
                filter: drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.5));
                color: ${({ theme }) => theme.color.dark};
                &:hover {
                    transform: rotate(180deg);
                    transition: transform 0.5s linear;
                }
                transition: transform 0.5s linear;
            }
        }
        .title {
            letter-spacing: 1px;
            font-style: italic;

            .double-o {
                color: ${({ theme }) => theme.color.icon};
            }
        }
    }

    .main {
        max-width: 700px;
        width: 100%;
        padding: 10px;
    }
`;

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
    box-shadow: -2px 0px 2px ${({ theme }) => theme.color.dark};
`;

const Layout: React.FC = ({ children }) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkThemeContext);

    const onClickToggle = useCallback(() => {
        localStorage.setItem('isDarkMode', JSON.stringify({ value: !isDarkMode }));
        setIsDarkMode(prev => !prev);
    }, [setIsDarkMode, isDarkMode]);

    useEffect(() => {
        const localStorageDarkItem = localStorage.getItem('isDarkMode');
        if (localStorageDarkItem) {
            if (JSON.parse(localStorageDarkItem).value === true) {
                setIsDarkMode(true);
            } else {
                setIsDarkMode(false);
            }
        }
    }, []);

    return (
        <>
            <Container>
                <nav className="nav-container">
                    <Link to={`/`}>
                        <h3 className="title text">
                            W<span className="double-o">OO</span>NG
                        </h3>
                    </Link>
                    <div className="nav-sub text">
                        <Link to={`/about/`} className="link-about">
                            About
                        </Link>
                        {isDarkMode ? (
                            <FaSun onClick={onClickToggle} className="sun theme-icon" />
                        ) : (
                            <RiMoonClearFill onClick={onClickToggle} className="moon theme-icon" />
                        )}
                    </div>
                </nav>
                <main className="main">{children}</main>
            </Container>
            <Footer className="footer text">2020 @Jaewoong2</Footer>
        </>
    );
};

export default Layout;
