import React, { useCallback, useEffect, useState } from 'react';
import { MdClear } from 'react-icons/md';
import styled from 'styled-components';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const Section = styled.section`
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.dark};

    .image-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        .image-figure {
            width: 45%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            margin: 0;
            min-width: 200px;
            min-height: 200px;
            max-width: 500px;
            .image {
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%;
                padding: 0;
                margin: 0px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
`;

const ImgArticle = styled.article`
    z-index: 10;
    width: 98.3vw;
    min-height: 103vh;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(30, 31, 33);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .clear-icon-wrapper {
        margin-top: 10px;
        margin-left: 90%;
        cursor: pointer;
        .clear-icon {
            z-index: -1;
            color: white;
        }
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
                height: 50%;
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

interface PortfolioProps {
    images?: string[];
    className?: string;
    description?: string | JSX.Element | React.ReactNode;
    position?: 'left' | 'right';
}

const PortfolioImage: React.FC<PortfolioProps> = ({ position, images, className, description }) => {
    const [imageClicked, setImageClikced] = useState<imageClickedType>();

    useEffect(() => {
        images?.map(image => {
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
                    // 아예 없으면
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

    const onClickCancelImage = useCallback((e?: React.MouseEvent<HTMLElement | SVGElement, MouseEvent>) => {
        if (e?.currentTarget === e?.target) {
            setImageClikced(prev => {
                return prev?.map(image => (image.isClicked === true ? { ...image, isClicked: false } : image));
            });
        }
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
        <>
            <Section className={className}>
                <article className="image-wrapper">
                    {position === 'left' && <div>{description}</div>}
                    <figure className="image-figure">
                        <img onClick={onClickImage(1)} className="image" src={images?.[1] ? images?.[1] : ''} />
                    </figure>
                    {position === 'right' && <div>{description}</div>}
                </article>
            </Section>
            {imageClicked?.map(
                (image, idx: number) =>
                    image.isClicked && (
                        <ImgArticle key={`image -${idx}`}>
                            <div className="clear-icon-wrapper">
                                <MdClear className="clear-icon" onClick={onClickCancelImage} />
                            </div>
                            <div onClick={onClickCancelImage} className="image-figure-wrapper">
                                <div className="arrow-wrapper">
                                    <IoIosArrowDropleftCircle onClick={onClickLeftArrow(idx)} className="arrow left" />
                                </div>
                                <figure onClick={onClickCancelImage} className="image-figure">
                                    <img className="image" src={image.src} />
                                    <figcaption className="capation">{idx + 1 + '/' + imageClicked.length}</figcaption>
                                </figure>
                                <div className="arrow-wrapper">
                                    <IoIosArrowDroprightCircle
                                        onClick={onClickRightArrow(idx)}
                                        className="arrow right"
                                    />
                                </div>
                            </div>
                        </ImgArticle>
                    ),
            )}
        </>
    );
};

export default PortfolioImage;
