import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { graphAnimation, loadAnimation } from './style/global-theme';

const Main = styled.main`
    width: 100%;
    min-height: 70vh;
    .my-image-wrapper {
        width: 100%;
        height: 100%;
        margin-top: 200px;
        display: flex;
        align-items: center;
        justify-content: center;

        .my-image-figure {
            width: 50%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            margin: 0;
            min-width: 150px;

            .my-image {
                border-radius: 50%;
                padding: 0;
                margin: 0px;
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
            }
        }
    }

    .image-clicked-wrapper {
        width: 100%;
        transition: all 1s ease-in-out;
        display: flex;
        justify-content: flex-start;

        .image-clicked-figure {
            transition: all 1s ease-in-out;
            width: 30%;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0;
            min-width: 100px;
            .my-image {
                border-radius: 50%;
                padding: 0;
                margin: 0px;
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
            }
        }

        .line {
            width: 70%;
            max-width: 70%;
            display: flex;
            align-items: center;
            position: relative;
            animation: ${loadAnimation} 4s linear;
            &::after {
                opacity: 0.65;
                content: '';
                border-radius: 50px;
                animation: ${graphAnimation} 2s;
                position: absolute;
                width: 95%;
                margin-left: 10px;
                height: 2px;
                background-color: ${({ theme }) => theme.color.icon};
            }

            span {
                width: 17.8%;
                animation: ${graphAnimation} 3s linear;
                position: relative;
                &::after {
                    position: absolute;
                    animation: ${loadAnimation} 4s linear;
                    font-size: 0.9em;
                    background-color: ${({ theme }) => theme.color.dark};
                    height: 0px;
                    width: 2px;
                    color: ${({ theme }) => theme.color.dark};
                }
            }

            .birth {
                margin-left: 30px;
                &::after {
                    content: '1995.12.01 출생';
                }
            }
            .first {
                &::after {
                    content: '2014.03.한국외국어대학교.글로벌';
                }
            }
            .second {
                &::after {
                    content: '2016.03.숭실대학교';
                }
            }

            .navy {
                height: 2px;
                z-index: 2;
                background-color: navy;
                &::after {
                    content: '2017.05.해군 641기';
                }
            }

            .person {
                &::after {
                    content: '2019.04.병장 만기전역';
                }
            }
            .dev {
                &::after {
                    content: '2019.11.생활코딩.HTML.첫강의';
                }
            }
        }
    }
`;
type AboutMySelfProps = {
    imageSrc: string;
};

const AboutMySelf: React.FC<AboutMySelfProps> = ({ imageSrc }) => {
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsClicked(true);
        }, 700);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Main>
            <section className={isClicked ? 'image-clicked-wrapper' : 'my-image-wrapper'}>
                <figure className={isClicked ? 'image-clicked-figure' : 'my-image-figure'}>
                    <img className="my-image" src={imageSrc} />
                </figure>
                {isClicked && (
                    <div className="line">
                        <span className="birth" />
                        <span className="first" />
                        <span className="second" />
                        <span className="navy" />
                        <span className="person" />
                        <span className="dev" />
                    </div>
                )}
            </section>
        </Main>
    );
};

export default AboutMySelf;
