import React, { useCallback, useMemo, useState } from 'react';
import styled, { useTheme } from 'styled-components';

const Main = styled.section`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;

    .clarification-wrapper {
        width: 45%;
        height: 20%;
        background-color: ${({ theme }) => theme.color.dark};
        border-radius: 2px;
        margin-left: 20px;
        margin-bottom: 20px;

        .clarification {
            padding: 20px;
            color: ${({ theme }) => theme.color.primary};
            box-shadow: 2px 2px 5px
                ${({ theme }) => (theme.isDarkMode === true ? 'rgba(255, 255, 255, 0.435)' : 'rgba(0, 0, 0, 0.435)')};
            width: 100%;
            font-size: 0.75em;
            height: 100%;
        }
    }

    .history-wrapper {
        position: relative;
        padding-left: 10px;
        width: 50%;

        .date-wrapper {
            margin-bottom: 10px;

            &::after {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 2px;
                height: 100%;
                background-color: ${({ theme }) => theme.color.dark};
                transition: background-color 0.5s linear;
            }
            .date {
                position: relative;
                display: flex;
                height: 22px;
                align-items: center;
                padding-left: 12px;
                color: ${({ theme }) => (theme.isDarkMode === true ? theme.color.yellow : theme.color.purple)};
                text-shadow: ${({ theme }) => theme.color.boxShadow};
                &::before {
                    content: '';
                    position: absolute;
                    /* width: 22px;
                    height: 22px; */
                    width: 18px;
                    height: 2px;
                    left: -10px;
                    top: 11px;
                    /* border-radius: 50%; */
                    background-color: ${({ theme }) => theme.color.dark};
                }
                /* &::after {
                    content: '';
                    position: absolute;
                    width: 16px;
                    height: 16px;
                    left: 3.2px;
                    top: 3px;
                    border-radius: 50%;
                    background-color: ${({ theme }) => theme.color.primary};
                    transition: background-color 0.5s linear;
                } */
            }
            .description {
                width: fit-content;
                font-size: 0.75em;
                margin-top: 5px;
                position: relative;
                margin-left: 5px;
                cursor: pointer;
                &::before {
                    content: '';
                    color: inherit;
                    margin-right: 5px;
                }
            }
        }
    }
`;
type AboutMySelfProps = {
    myHistory: myHistoryProps[];
    circleColor?: string;
};
type myHistoryProps = {
    date?: string;
    description?: string | React.ReactNode | JSX.Element;
    clarification?: string;
};

const AboutMySelf: React.FC<AboutMySelfProps> = ({ myHistory, circleColor = 'rgba(252, 126, 141, 0.6)' }) => {
    const [isClicked, setIsClicked] = useState({ isClicked: false, index: 0 });
    const theme = useTheme();

    const ThemeWithProps: typeof theme = useMemo(() => {
        return {
            ...theme,
            props: {
                circleColor,
            },
        };
    }, [theme]);

    const onClickDescription = useCallback(
        idx => () => {
            setIsClicked({
                isClicked: true,
                index: idx,
            });
        },
        [],
    );

    return (
        <Main theme={ThemeWithProps}>
            <section className="history-wrapper">
                {myHistory?.map((history, idx) => (
                    <>
                        <div key={'history-' + idx} className="date-wrapper">
                            <div className="date text">{history.date}</div>
                            <div onClick={onClickDescription(idx)} className="description text">
                                {history.description}
                            </div>
                        </div>
                    </>
                ))}
            </section>
            {isClicked.isClicked && (
                <div className="clarification-wrapper">
                    <div className="clarification">{myHistory[isClicked.index].clarification}</div>
                </div>
            )}
        </Main>
    );
};

export default AboutMySelf;
