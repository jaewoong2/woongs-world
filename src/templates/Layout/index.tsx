import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext, useMemo } from 'react';
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
    // Server Side Rendering => process.env 가 정확히 안읽혀서 useMemo로 상태변화에 유이하게 설정
    const imageSrc = useMemo(() => {
        if (process?.env?.GATSBY_ACTIVE_ENV || process?.env?.NODE_ENV || 'development' === 'development') {
            return data?.allImageSharp?.edges[0]?.node?.fluid?.src;
        } else {
            return data?.allImageSharp?.edges[0]?.node?.fluid?.src.split('/')[1] === 'woongs-world'
                ? data?.allImageSharp?.edges[0]?.node?.fluid?.src
                : '/woongs-world' + data?.allImageSharp?.edges[0]?.node?.fluid?.src;
        }
    }, [process, data]);

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
                    headers={['til', 'dev', 'algorithm', 'about']}
                />
                <div className="section-container">
                    <SideSection>
                        <Introduce imageSrc={imageSrc} />
                    </SideSection>
                    <MainSection>{children}</MainSection>
                </div>
                <Footer />
            </div>
        </MainContainer>
    );
};

export default MainComponent;
