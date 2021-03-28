import { graphql, PageProps } from 'gatsby';
import React, { useEffect, useMemo, useState } from 'react';
import styled, { keyframes, useTheme } from 'styled-components';
import MainComponent from '../templates/Layout';

interface IError extends PageProps {
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

const ErrorSection = styled.section`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    .error-wrapper {
        margin-bottom: 40px;
        background-color: transparent;
        width: 100%;
        height: 100%;
        img {
            width: auto;
            max-height: 90%;
            z-index: -1;
            margin-bottom: 0;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
    }

    .title,
    .back {
        color: ${({ theme }) => theme.color.dark};
        text-decoration: none;
        border-bottom: none;
    }

    .back {
        cursor: pointer;
        color: ${({ theme }) => (theme.isDarkMode ? theme.color.yellow : theme.color.purple)};
        &:hover {
            opacity: 70%;
            transition: opacity 0.35s;
        }
        transition: opacity 0.35s;
    }
`;

const ErrorPage: React.VFC<IError> = ({ data }) => {
    const { isDarkMode } = useTheme();
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        data.allImageSharp.edges.forEach(({ node }) => {
            if (node.fluid.originalName === (isDarkMode ? 'errorY.png' : 'error.png')) {
                setImageSrc(node.fluid.src);
            }
        });
    }, [data, isDarkMode]);

    return (
        <MainComponent>
            <ErrorSection>
                <article className="error-wrapper">
                    <img src={imageSrc && imageSrc} />
                    <a className="back" onClick={() => typeof history !== 'undefined' && history.go(-1)}>
                        Go Back?
                    </a>
                </article>
            </ErrorSection>
        </MainComponent>
    );
};

export default ErrorPage;

export const query = graphql`
    {
        allImageSharp(filter: { fluid: { originalName: { in: ["error.png", "errorY.png"] } } }) {
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
