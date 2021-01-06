import React, { useState, useEffect, useCallback, useMemo, Fragment } from 'react';
import styled, { useTheme } from 'styled-components';

const MainDiv = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .left,
    .right,
    .bottom {
        display: ${props => (props.theme.props?.button === true ? 'flex' : 'none')};
        opacity: 0;
        transition: all 0.5s;
    }
    &:hover {
        .left,
        .right,
        .bottom {
            opacity: 1;
            transition: all 0.5s;
        }
    }
    .left,
    .right {
        align-items: center;
        position: absolute;
        color: rgba(255, 255, 255, 0.7);
        text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
        font-size: 24px;
        &:hover {
            cursor: pointer;
            color: rgba(40, 60, 144, 0.7);
            transition: color 0.4s;
        }
        transition: color 0.4s;
    }
    .bottom {
        width: 100%;
        justify-content: center;
        position: absolute;
        bottom: 0;
        input[type='checkbox' i] {
            display: none;
        }
        input[type='checkbox' i] + span {
            margin-right: 5px;
            margin-left: 5px;
            width: 20px;
            height: 20px;
            background-color: rgba(255, 255, 255, 0.7);
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
            position: realtive;
            border-radius: 50%;
            transition: background-color 0.5s, transform 0.5s;
            &:hover {
                cursor: pointer;
                transform: scale(1.2);
            }
        }
        input[type='checkbox' i]:checked + span {
            margin-right: 5px;
            margin-left: 5px;
            width: 20px;
            height: 20px;
            background-color: rgba(40, 60, 144, 0.9);
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
            position: realtive;
            border-radius: 50%;
            transform: scale(1.3);
            transition: background-color 0.5s, transform 0.5s;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .left {
        z-index: 2;
        left: 0;
    }
    .right {
        right: 0;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    .image-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
        transform: ${props =>
            `translateX(-${props.theme.props.nowImage}%) scale(${props.theme.props?.animationScale})`};
        transition: transform 0.5s;
    }
    /*  이미지 비율에 맞춰서 넓이와 높이를 조정하기 위해 이미지를 감싸는 */
    /*  콘테이너를 만들고 그것의 넓이, 높이는 부모와 동일,  */
    /*  가운데에 이미지를 넣고,  */
    /*  이미지의 width와 height는 auto로 조정한다 */
    /*  슬라이드 형식을 위해 transform 은 100% 단위로 움직이는데 */
    /*  이미지 콘테이너가 이에 맞는다. 이것을 transform 해서 이미지 이동을 하면 된다. */
    img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.5);
        &:focus {
            outline: 0;
        }
    }
    transition: transform 0.5s;
`;

type MyImageSlideProps = {
    imageArray: string[];
    draggable?: boolean;
    keyDown?: boolean;
    loading?: boolean;
    interval?: boolean;
    intervalTime?: number;
    left?: JSX.Element | string;
    right?: JSX.Element | string;
    button?: boolean;
    setBannerColor?: any;
};

const MyImageSlide: React.FC<MyImageSlideProps> = ({
    setBannerColor,
    button = true,
    loading,
    interval = true,
    intervalTime = 2000,
    imageArray,
    draggable = true,
    keyDown = true,
    left = '◀︎',
    right = '▶',
}: MyImageSlideProps) => {
    const defaultTheme = useTheme();
    const [imageLength, setImageLength] = useState<number>(0);
    // 이미지 총 길이

    const [mouseMove, setMouseMove] = useState<number>(0);
    // 드래그 시작 커서위치

    const [nowImage, setNowImage] = useState('0');
    // 이미지 순서 ( translateX(0) => translateX(-100))

    const [animationScale, setAnimationScale] = useState(0);
    // 이미지가 바뀔 때, scale 애니메이션 주기 위함

    const [intervalState, setIntervalState] = useState(interval);

    const onClickLeft = useCallback(() => {
        setNowImage(prev => (parseInt(prev[0], 10) - 1 < 0 ? `${imageLength}00` : `${parseInt(prev[0], 10) - 1}00`));
        setIntervalState(false);
    }, [imageLength]);

    const onClickRight = useCallback(() => {
        setNowImage(prev => (parseInt(prev[0], 10) + 1 > imageLength ? '0' : `${parseInt(prev[0], 10) + 1}00`));
        setIntervalState(false);
    }, [imageLength]);

    const onClickBottom = useCallback(
        number => () => {
            setNowImage(`${number}00`);
            setIntervalState(false);
        },
        [],
    );

    useEffect(() => {
        if (intervalState) {
            const intervalRight = setInterval(() => {
                setNowImage(prev => (parseInt(prev[0], 10) + 1 > imageLength ? '0' : `${parseInt(prev[0], 10) + 1}00`));
            }, intervalTime);
            return () => clearInterval(intervalRight);
        }
    }, [onClickRight, intervalTime, intervalState, imageLength]);

    useEffect(() => {
        setImageLength(imageArray.length - 1);
    }, [imageArray, imageLength]);

    useEffect(() => {
        setAnimationScale(0.8);
        const timer = setTimeout(() => {
            setAnimationScale(1);
        }, 500);
        // 이미지를 바꿀 때, 줄어들었다가 커지는 효과
        // transition 과 같은 0.5s
        return () => clearTimeout(timer);
    }, [nowImage]);

    const onKeyDownImage = useCallback(
        (e: React.KeyboardEvent<HTMLImageElement>) => {
            if (keyDown) {
                switch (e.key) {
                    case 'ArrowLeft':
                        onClickLeft();
                        break;
                    case 'ArrowRight':
                        onClickRight();
                        break;
                    default:
                        break;
                }
            }
        },
        [onClickLeft, onClickRight, keyDown],
    );

    const onDragStartImage = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            draggable && setMouseMove(e.clientX);
        },
        [draggable],
    );

    const onDragEndImage = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            if (draggable) {
                if (e.clientX - mouseMove < -150) {
                    // NextPage
                    onClickRight();
                }
                if (e.clientX - mouseMove > 150) {
                    // PrevPage
                    onClickLeft();
                }
                setMouseMove(0);
            }
        },
        [mouseMove, draggable, onClickLeft, onClickRight],
    );

    const themeMemo = useMemo(() => {
        return {
            nowImage: nowImage,
            animationScale: animationScale,
            button,
        };
    }, [nowImage, animationScale, button]);
    // 이미지 변경 css nowImage => 이미지 번호, animationScale => 이미지 스케일 애니메이션

    return (
        <MainDiv onKeyDown={onKeyDownImage}>
            <>
                <span className="left" onClick={onClickLeft}>
                    {left}
                </span>
                <ImageWrapper theme={{ ...defaultTheme, props: themeMemo }}>
                    {imageArray.map((images, imageIndex) => (
                        <div
                            key={imageIndex + 'image-container'}
                            className="image-container"
                            onDragEnd={onDragEndImage}
                            onDragStart={onDragStartImage}
                        >
                            <img
                                className="image"
                                key={'image' + imageIndex}
                                alt={images}
                                draggable={draggable}
                                src={images}
                                tabIndex={-1}
                            />
                        </div>
                    ))}
                </ImageWrapper>
                <span className="right" onClick={onClickRight}>
                    {right}
                </span>
                <div className="bottom">
                    {imageArray.map((images, i) => (
                        <Fragment key={'image-bottom-div' + i}>
                            <input
                                key={'image-bottom-check' + i}
                                className="bottom-toggle"
                                readOnly
                                checked={i === parseInt(nowImage[0], 10)}
                                type="checkbox"
                            />
                            <span key={'image-bottom-span' + i} onClick={onClickBottom(i)}></span>
                        </Fragment>
                    ))}
                </div>
            </>
        </MainDiv>
    );
};

export default MyImageSlide;
