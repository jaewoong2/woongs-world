import React, { useCallback, useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { AiFillDownCircle } from 'react-icons/ai';
import { IoSearchCircle } from 'react-icons/io5';
import styled from 'styled-components';
import Layout from '../components/layout';
import useInput from '../hooks/useInput';
import { loadAnimation } from '../components/style/global-theme';
import { BsArrowUpLeft } from 'react-icons/bs';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    .search-bar-warpper {
        z-index: 10;
        width: 100%;
        display: flex;
        justify-content: center;
        .search-bar {
            width: 80%;
            height: 52px;
            margin: 0px;
            border-radius: 2px;
            display: flex;
            align-items: center;
            border: 2px solid #19ce60;

            .search-input {
                padding: 13px 15px;
                width: 90%;
                margin: 1px;
                background-color: inherit;
                height: 24px;
                font-size: 0.9em;
                color: ${({ theme }) => theme.color.dark};
                outline: 0;
                border: 0px;
                font-weight: 700;
            }
            .search-icon-wrapper {
                width: 52px;
                display: flex;
                border-radius: 0 2px 2px 0;
                align-items: center;
                justify-content: center;
                background-color: #19ce60;
                cursor: pointer;
                height: 52px;
                .icon {
                    font-size: 29px;
                    color: ${({ theme }) => theme.color.dark};
                }
            }

            .up {
                transform: rotate(180deg);
            }

            .down {
                transform: rotate(0deg);
            }

            .recommend-icon {
                color: #19ce60;
                font-size: 1.2em;
                margin-right: 6px;
                cursor: pointer;
                transition: transform 0.3s linear;
            }
        }
    }

    .searched-value-container {
        width: 100%;
        display: flex;
        justify-content: center;
        animation: ${loadAnimation} 0.4s;
        .searched-value-wrapper {
            overflow-y: scroll;
            width: 80%;
            min-height: 300px;
            max-height: 500px;
            background-color: inherit;
            border: 1px solid ${({ theme }) => theme.color.border};
            box-shadow: 0 2px 5px 0 ${({ theme }) => theme.color.boxShadow};
            transition: border 0.5s linear;
            border-radius: 2px;
            color: ${({ theme }) => theme.color.dark};
            font-size: 0.8em;

            .searched-value-nav {
                width: 100%;
                display: flex;
                position: relative;
                justify-content: space-between;
                padding: 8px 11px 0px 11px;
                p {
                    margin-bottom: 10px;
                }
                .searched-value-clear {
                    cursor: pointer;
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

            .searched-value {
                margin-bottom: 0;
                list-style: none;
                margin-left: 8px;
                margin-top: 6px;
                padding: 3px;
                width: 96%;
                display: flex;
                align-items: center;
                font-size: 1em;
                cursor: pointer;
                justify-content: space-between;
                .searched-value-with-icon {
                    width: 100%;
                    display: flex;
                    align-items: center;
                }
                .icon {
                    margin-right: 5px;
                    font-size: 1.2em;
                }
                &:hover {
                    transition: background-color 0.2s;
                    background-color: ${({ theme }) => theme.color.hoverBackground};
                    border-radius: 5px;
                }
                transition: background-color 0.2s;
            }
        }
    }
`;

type searchedValuesType = {
    isOpen: boolean;
    searcehdValues: string[];
};

const Search: React.FC = () => {
    const [placeholder, setPlaceholder] = useState<string>('궁금한 것이 무엇인가요?');
    const [searchValue, setSearchValue, onChangeSearchValue] = useInput<string | undefined>(undefined);
    const [searchedValues, setSearchedValues] = useState<searchedValuesType>({
        isOpen: false,
        searcehdValues: [],
    });

    const onClickSearch = useCallback(() => {
        if (searchValue) {
            setSearchedValues(prev => {
                const newSearchedValues =
                    prev.searcehdValues.length > 0 ? [searchValue, ...prev.searcehdValues] : [searchValue];
                localStorage.setItem('searchedValues', JSON.stringify({ values: newSearchedValues }));
                return {
                    ...prev,
                    searcehdValues: newSearchedValues,
                };
            });
        }
    }, [searchValue]);

    useEffect(() => {
        const localStorageSearchedValues = localStorage.getItem('searchedValues');
        if (localStorageSearchedValues) {
            setSearchedValues({
                isOpen: false,
                searcehdValues: JSON.parse(localStorageSearchedValues).values || [],
            });
        }
    }, []);

    useEffect(() => {
        if (searchValue) {
            setSearchedValues(prev => {
                return {
                    ...prev,
                    isOpen: true,
                };
            });
        } else {
            setSearchedValues(prev => {
                return {
                    ...prev,
                    isOpen: false,
                };
            });
        }
    }, [searchValue]);

    const onClickDownBtn = useCallback(() => {
        setSearchedValues(prev => {
            return {
                ...prev,
                isOpen: !prev.isOpen,
            };
        });
    }, []);

    const onClickBlanckArea = useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.currentTarget === e.target) {
            setSearchedValues(prev => {
                if (prev.isOpen) {
                    return {
                        ...prev,
                        isOpen: false,
                    };
                }
                return prev;
            });
        }
    }, []);

    const onClickClear = useCallback(() => {
        localStorage.setItem('searchedValues', JSON.stringify({ values: [] }));
        setSearchedValues(prev => {
            return {
                ...prev,
                searcehdValues: [],
            };
        });
    }, []);

    return (
        <Layout>
            <Section onClick={onClickBlanckArea}>
                <div onClick={onClickBlanckArea} className="search-bar-warpper">
                    <div className="search-bar">
                        <input
                            onChange={onChangeSearchValue}
                            value={searchValue}
                            placeholder={placeholder}
                            className="search-input"
                        />
                        <AiFillDownCircle
                            onClick={onClickDownBtn}
                            className={`recommend-icon ${searchedValues.isOpen ? 'up' : 'down'}`}
                        />
                        <div onClick={onClickSearch} className="search-icon-wrapper" aria-label="icon">
                            <BiSearchAlt className="icon" />
                        </div>
                    </div>
                </div>
                {searchedValues.isOpen && (
                    <section onClick={onClickBlanckArea} className="searched-value-container">
                        <div className="searched-value-wrapper">
                            <nav className="searched-value-nav">
                                <p className="searched-value-recent">최근검색어</p>
                                <p onClick={onClickClear} className="searched-value-clear">
                                    전체삭제
                                </p>
                            </nav>
                            {searchedValues.searcehdValues?.map((searchedValue, idx) => (
                                <li className="searched-value" key={`${searchValue} - ${idx}`}>
                                    <div className="searched-value-with-icon">
                                        <IoSearchCircle className="icon" />
                                        {searchedValue}
                                    </div>
                                    <BsArrowUpLeft className="arrow" />
                                </li>
                            ))}
                        </div>
                    </section>
                )}
            </Section>
        </Layout>
    );
};

export default Search;
