import { PageProps } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainComponent from '../templates/Layout';

interface AboutPageProps extends PageProps {
    data: {
        allImageSharp: {
            edges: {
                node: {
                    fluid: {
                        aspectRatio: number;
                        base64: string;
                        sizies: string;
                        src: string;
                        srcSet: string;
                    };
                    id: string;
                };
            }[];
        };
    };
}

const Paragraph = styled.p`
    width: 100%;
    margin-top: 25px;
    display: flex;
    font-size: 1.5em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px;
    /* &::before {
        content: '';
        width: 98%;
        margin-bottom: 20px;
        height: 2.5px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.color.border};
    } */
`;

const randomState = ['hard-working', 'pleasing', 'self-confidence', 'fast-comprehension'];
const About: React.FC<AboutPageProps> = () => {
    const [state, setState] = useState<string>('passion');

    useEffect(() => {
        const timer = setInterval(() => {
            setState(prev => {
                return randomState[(randomState.indexOf(prev) + 1) % randomState.length];
            });
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    return (
        <MainComponent>
            <Paragraph className="text">I am a {`{${state}}`} person</Paragraph>
        </MainComponent>
    );
};

export default About;
