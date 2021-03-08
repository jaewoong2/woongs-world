import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import Footer from '../../components/footer';
import Introduce from '../../components/introduce';
import DarkThemeContext from '../../provider';
import HeadNav from '../HeadNav';
import ReactHelmet from '../ReactHelmet';
import { MainContainer, MainSection, SideSection } from './styles';

type dataType = {
    allImageSharp: {
        edges: {
            node: {
                id: number | string;
                fluid: {
                    src: string;
                    originalName: string;
                };
            };
        }[];
    };
};

const MainComponent: React.FC = ({ children }) => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkThemeContext);
    const data: dataType = useStaticQuery(graphql`
        query {
            allImageSharp(filter: { fluid: { originalName: { eq: "myimage.jpg" } } }) {
                edges {
                    node {
                        id
                        fluid {
                            ...GatsbyImageSharpFluid
                            originalName
                        }
                    }
                }
            }
        }
    `);

    return (
        <MainContainer>
            <ReactHelmet
                favicon={'https://jaewoong2.github.io/woongs-world/favicon.ico'}
                keywords={'tech, webfrontend, web, dev, algorithm'}
                title={'Woongs-world DEV'}
                description={'개발 관련포스팅!'}
            />
            <div className="main-container">
                <HeadNav
                    setIsDarkMode={setIsDarkMode}
                    isDarkMode={isDarkMode}
                    headers={['tsl', 'about', 'dev', 'algorithm']}
                />
                <div className="section-container">
                    <SideSection>
                        <Introduce imageSrc={data?.allImageSharp?.edges[0]?.node?.fluid?.src} />
                    </SideSection>
                    <MainSection>{children}</MainSection>
                </div>
                <Footer />
            </div>
        </MainContainer>
    );
};

export default MainComponent;
