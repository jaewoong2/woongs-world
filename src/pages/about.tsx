import { graphql, PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainComponent from '../templates/Layout';

interface IAbout extends PageProps {
    data: {
        allImageSharp: {
            edges: {
                node: {
                    fluid: {
                        src: string;
                        srcSet: string;
                        originalName: string;
                    };
                    id: string;
                };
            }[];
        };
    };
}
const Article = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    img {
        width: 95%;
        height: auto;
        position: absolute;
        opacity: 0.95;
        z-index: -1;
    }
`;

const Paragraph = styled.p`
    width: 100%;
    height: 500px;
    display: flex;
    font-size: 1.5em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px;
    font-family: 'DotGothic16', 'source sans pro', sans-serif;
`;

const randomState = [
    'a hard-working person',
    'self-confidence person for what i do',
    'person who have fast-comprehension for new-thing',
];
const About: React.FC<IAbout> = ({ data }) => {
    const [state, setState] = useState<string>('Wanting be a Developer');

    useEffect(() => {
        const timer = setInterval(() => {
            setState(prev => {
                return randomState[(randomState.indexOf(prev) + 1) % randomState.length];
            });
        }, 2200);

        return () => clearInterval(timer);
    }, []);

    return (
        <MainComponent>
            <Article>
                <img src={data.allImageSharp.edges[0].node.fluid.src} />
                <Paragraph className="text">I am {`{${state}}`}</Paragraph>
            </Article>
        </MainComponent>
    );
};

export default About;

export const query = graphql`
    {
        allImageSharp(filter: { fluid: { originalName: { eq: "munzi.png" } } }) {
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
`;
