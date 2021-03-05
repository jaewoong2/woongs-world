import { graphql, useStaticQuery } from 'gatsby';
import React, { useContext } from 'react';
import Introduce from '../../components/introduce';
import DarkThemeContext from '../../provider';
import HeadNav from '../HeadNav';
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
            </div>
        </MainContainer>
    );
};

export default MainComponent;
