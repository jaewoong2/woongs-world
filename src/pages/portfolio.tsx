import { graphql, PageProps } from 'gatsby';
import React, { useCallback, useEffect, useState } from 'react';
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import styled from 'styled-components';
import Layout from '../components/layout';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { loadAnimation } from '../components/style/global-theme';

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
    color: ${({ theme }) => theme.color.dark};

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

const ImgArticle = styled.article`
    z-index: 10;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(30, 31, 33);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .clear-icon {
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 90%;
        color: white;
        cursor: pointer;
    }

    .image-figure-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .arrow {
            color: white;
            display: flex;
            height: 100%;
            align-items: center;
            font-size: 35px;
            cursor: pointer;
        }
        .left {
            margin-right: 10px;
        }
        .right {
            margin-left: 10px;
        }

        .image-figure {
            width: auto;
            height: 100%;
            max-height: auto;
            max-width: 800px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            user-select: none;
            .capation {
                margin-top: 10px;
                letter-spacing: 3px;
                color: white;
            }
            .image {
                user-select: none;
                padding: 0;
                margin: 0px;
                width: auto;
                height: 60%;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }
`;

type imageClickedType = {
    isClicked: boolean;
    src: string;
}[];

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
    const [imageClicked, setImageClikced] = useState<imageClickedType>();
    const images = data.allImageSharp.edges
        .map(edge => edge.node.fluid.originalName.includes('portfolio') && edge.node.fluid.src)
        .filter(image => !!image);
    useEffect(() => {
        images.map(image => {
            if (image) {
                setImageClikced(prev => {
                    if (prev && prev.length > 0) {
                        return [
                            ...prev,
                            {
                                isClicked: false,
                                src: image,
                            },
                        ];
                    }
                    return [
                        {
                            isClicked: false,
                            src: image,
                        },
                    ];
                });
            }
        });
    }, []);

    useEffect(() => {
        console.log(imageClicked);
    }, [imageClicked]);

    const onClickImage = useCallback(
        (idx: number) => () => {
            setImageClikced(prev => {
                if (prev && prev.length > 0) {
                    return prev.map((image, index) =>
                        idx === index ? { ...image, isClicked: true } : { ...image, isClicked: false },
                    );
                }
            });
        },
        [],
    );

    const onClickCancelImage = useCallback(() => {
        setImageClikced(prev => {
            return prev?.map(image => (image.isClicked === true ? { ...image, isClicked: false } : image));
        });
    }, []);

    const onClickRightArrow = useCallback(
        (index: number) => () => {
            setImageClikced(prev => {
                return prev?.map((image, idx: number) => {
                    if (index + 1 < prev.length) {
                        return index + 1 === idx ? { ...image, isClicked: true } : { ...image, isClicked: false };
                    }
                    return idx === 0 ? { ...image, isClicked: true } : { ...image, isClicked: false };
                });
            });
        },
        [],
    );

    const onClickLeftArrow = useCallback(
        (index: number) => () => {
            setImageClikced(prev => {
                return prev?.map((image, idx: number) => {
                    if (index === 0) {
                        return prev.length - 1 === idx ? { ...image, isClicked: true } : { ...image, isClicked: false };
                    }
                    return idx === index - 1 ? { ...image, isClicked: true } : { ...image, isClicked: false };
                });
            });
        },
        [],
    );

    return (
        <Layout>
            <Section>
                <p>개인 프로젝트</p>
                <article className="image-wrapper">
                    {images.map((image, idx) => {
                        if (image) {
                            return (
                                <figure key={`image -${idx}`} className="image-figure">
                                    <img onClick={onClickImage(idx)} className="image" src={image} />
                                </figure>
                            );
                        }
                    })}
                </article>
            </Section>
            {imageClicked?.map(
                (image, idx: number) =>
                    image.isClicked && (
                        <ImgArticle key={`image -${idx}`}>
                            <MdClear onClick={onClickCancelImage} className="clear-icon" />
                            <div className="image-figure-wrapper">
                                <IoIosArrowDropleftCircle onClick={onClickLeftArrow(idx)} className="arrow left" />
                                <figure className="image-figure">
                                    <img className="image" src={image.src} />
                                    <figcaption className="capation">{idx + 1 + '/' + imageClicked.length}</figcaption>
                                </figure>
                                <IoIosArrowDroprightCircle onClick={onClickRightArrow(idx)} className="arrow right" />
                            </div>
                        </ImgArticle>
                    ),
            )}
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
                    fluid(maxWidth: 1500, maxHeight: 1500) {
                        ...GatsbyImageSharpFluid
                        originalName
                    }
                }
            }
        }
    }
`;
