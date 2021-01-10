import React, { useCallback, useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { AiFillDownCircle } from 'react-icons/ai';
import { IoSearchCircle } from 'react-icons/io5';
import styled from 'styled-components';
import Layout from '../components/layout';
import useInput from '../hooks/useInput';
import { loadAnimation } from '../components/style/global-theme';
import { BsArrowUpLeft } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';
import Recommend from '../components/serach/Recommend';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    .search-bar-warpper {
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
                letter-spacing: 1.2px;
                border: 0px;
                font-weight: 700;
            }
            .search-icon-wrapper {
                z-index: 10;
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
        z-index: 3;
        .searched-value-wrapper {
            overflow-y: scroll;
            width: 80%;
            min-height: 300px;
            max-height: 500px;
            transition: background-color 0.5s;
            background-color: ${({ theme }) => theme.color.primary};
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

            .not-searched-value {
                width: 100%;
                height: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 1.2em;
                font-weight: 300;
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

                .icons-wrapper {
                    display: flex;

                    .clear {
                        &:hover {
                            transition: font-size 0.2s;
                            font-size: 1.115em;
                        }
                        transition: font-size 0.2s;
                    }
                }

                .searched-value-with-icon {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    letter-spacing: 1.2px;
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
    .recommend-container {
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 54px;
    }
`;

type searchedValuesType = {
    isOpen: boolean;
    searcehdValues: string[];
};

const Search: React.FC = () => {
    const [placeholder, setPlaceholder] = useState<string>('궁금한 것이 무엇인가요?');
    const [searchValue, setSearchValue, onChangeSearchValue] = useInput<string>('');
    const [searchedValues, setSearchedValues] = useState<searchedValuesType>({
        isOpen: false,
        searcehdValues: [],
    });

    const onClickSearch = useCallback(
        (e?: React.KeyboardEvent<HTMLInputElement>) => {
            if (e) {
                if (e?.key === 'Enter' && searchValue) {
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
            } else {
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
            }
        },
        [searchValue],
    );

    /** 로컬스토리지에 있는 searchedValue 값을 가져온다. */
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

    const onClickClear = useCallback((idx?: number) => {
        localStorage.setItem('searchedValues', JSON.stringify({ values: [] }));
        setSearchedValues(prev => {
            if (idx === 0 || idx) {
                const newSearchedValues = [...prev.searcehdValues];
                newSearchedValues.splice(idx, 1);
                localStorage.setItem('searchedValues', JSON.stringify({ values: newSearchedValues }));
                return {
                    ...prev,
                    searcehdValues: newSearchedValues,
                };
            }
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
                            readOnly={true}
                            onKeyDown={onClickSearch}
                            onChange={onChangeSearchValue}
                            value={searchValue}
                            placeholder={placeholder}
                            className="search-input"
                        />
                        <AiFillDownCircle
                            onClick={onClickDownBtn}
                            className={`recommend-icon ${searchedValues.isOpen ? 'up' : 'down'}`}
                        />
                        <div onClick={() => onClickSearch()} className="search-icon-wrapper" aria-label="icon">
                            <BiSearchAlt className="icon" />
                        </div>
                    </div>
                </div>
                {searchedValues.isOpen && (
                    <section onClick={onClickBlanckArea} className="searched-value-container">
                        <div className="searched-value-wrapper">
                            <nav className="searched-value-nav">
                                <p className="searched-value-recent">최근검색어</p>
                                <p onClick={() => onClickClear()} className="searched-value-clear">
                                    전체삭제
                                </p>
                            </nav>
                            {searchedValues.searcehdValues?.map((searchedValue, idx) => (
                                <li className="searched-value" key={`${searchValue} - ${idx}`}>
                                    <div className="searched-value-with-icon">
                                        <IoSearchCircle className="icon" />
                                        {searchedValue}
                                    </div>
                                    <div className="icons-wrapper">
                                        <BsArrowUpLeft className="arrow" />
                                        <MdClear onClick={() => onClickClear(idx)} className="clear" />
                                    </div>
                                </li>
                            ))}
                            {searchedValues.searcehdValues.length === 0 && (
                                <div className="not-searched-value">
                                    <p>최근에 검색한 것이 없습니다.</p>
                                </div>
                            )}
                        </div>
                    </section>
                )}
                <div className="recommend-container">
                    <Recommend setSearchValue={setSearchValue} onClickSearch={onClickSearch} />
                </div>
            </Section>
        </Layout>
    );
};

export default Search;
