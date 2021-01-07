import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const linkAnimation = keyframes`
    from {
        transform: translateY(-10px);
    }
    to {
        transform: translateY(0px);
    }
`;

const Section = styled.section`
    width: 80%;
    min-height: 200px;
    border: 1px solid ${({ theme }) => theme.color.border};
    transition: border 0.4s;
    color: ${({ theme }) => theme.color.dark};

    .list-link {
        color: ${({ theme }) => theme.color.dark};
        text-decoration: none;
        .recommend-list {
            margin-bottom: 0;
            animation: ${linkAnimation} 2s;
            list-style: none;
            margin-left: 8px;
            margin-top: 6px;
            padding: 3px;
            width: 96%;
            display: flex;
            align-items: center;
            font-size: 1em;
            cursor: pointer;

            .list-index {
                margin-right: 5px;
            }
        }
    }
    .recommend-nav {
        width: 100%;
        height: 32px;
        position: relative;
        display: flex;
        padding-bottom: 10px;
        .recommend-nav-pharagraph {
            padding: 8px 11px 0px 11px;
            font-size: 0.95em;
        }
        &::after {
            display: flex;
            content: '';
            position: absolute;
            margin-left: 2.5%;
            width: 95%;
            height: 2.2px;
            left: 0;
            bottom: 0;
            background-color: ${({ theme }) => theme.color.border};
        }
    }
`;
const initalRecommendValues = [
    {
        list: '포트폴리오',
        link: '/portfolio',
    },
    {
        list: 'Git Hub @jaewoong2',
        link: 'https://github.com/jaewoong2',
    },
    {
        list: '임재웅은 누구 인가요?',
        link: '/about',
    },
    {
        list: '프론트 엔드 블로그 추천',
        link: 'https://velog.io/@jwisgenius',
    },
    {
        list: '오늘의 날씨',
        link: '/wheater',
    },
];

type RecommendProps = {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    onClickSearch: (e?: React.KeyboardEvent<HTMLInputElement> | undefined) => void;
};

const Recommend: React.FC<RecommendProps> = ({ setSearchValue, onClickSearch }) => {
    const [recommendValues, setRecommendValues] = useState(initalRecommendValues);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRecommendValues(prev => {
                const newValues = [...prev];
                for (let i = 0; i < prev.length; i++) {
                    newValues.splice(i, 1, i + 1 === prev.length ? prev[0] : prev[i + 1]);
                }
                return newValues;
            });
        }, 7000);
        return () => clearTimeout(timer);
    }, [recommendValues]);

    return (
        <Section>
            <div className="recommend-wrapper">
                <nav className="recommend-nav">
                    <p className="recommend-nav-pharagraph">추천 검색어</p>
                </nav>
                {recommendValues.map((list, idx: number) => (
                    <a key={list.link} rel="noreferrer" className="list-link" href={list.link} target="_blank">
                        <li
                            onClick={() => {
                                setSearchValue(list.list);
                                onClickSearch(undefined);
                            }}
                            style={{ animationDelay: `${0 + idx}s` }}
                            key={`${list} - ${idx}`}
                            className="recommend-list"
                        >
                            <span className="list-index">{idx + 1}.</span>
                            {list.list}
                        </li>
                    </a>
                ))}
            </div>
        </Section>
    );
};

export default Recommend;
