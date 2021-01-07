import { graphql, PageProps } from 'gatsby';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

interface PortfolioProps extends PageProps {
    data: {
        allImageSharp: {
            edges: {
                node: {
                    fluid: {
                        src: string;
                        originalName: string;
                    };
                    id: string;
                };
            }[];
        };
    };
}

const Section = styled.section`
    width: 100%;
    height: 100%;

    .image-wrapper {
        width: 80%;
        display: flex;

        .image-figure {
            width: 50%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            margin: 0;
            min-width: 150px;
            margin-right: 5px;
            .image {
                padding: 0;
                margin: 0px;
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`;

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    const [isImageClicked, setIsImageClikced] = useState(false);
    const images = data.allImageSharp.edges
        .map(edge => edge.node.fluid.originalName.includes('portfolio') && edge.node.fluid.src)
        .filter(image => !!image);
    
    return (
        <Layout>
            <Section>
                <p>개인 프로젝트</p>
                <article className="image-wrapper">
                    {images.map((image, idx) => {
                        if (image) {
                            return (
                                <figure key={`image -${idx}`} className="image-figure">
                                    <img className="image" src={image} />
                                </figure>
                            );
                        }
                    })}
                </article>
            </Section>
        </Layout>
    );
};

export default Portfolio;

export const query = graphql`
    query {
        allImageSharp {
            edges {
                node {
                    id
                    fluid(maxWidth: 3000, maxHeight: 3000) {
                        ...GatsbyImageSharpFluid
                        originalName
                    }
                }
            }
        }
    }
`;
