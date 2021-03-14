import styled from 'styled-components';

export const HeaderNav = styled.nav`
    width: 100%;
    display: flex;
    height: 2.8em;
    border-bottom: 2.3px solid;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    color: ${({ theme }) => theme.color.dark};

    .link-wrapper {
        display: flex;
    }

    .active {
        color: ${({ theme }) => theme.color.representativeColor};
    }

    .button-wrapper {
        padding-left: 10px;
        display: flex;
        align-items: center;
        color: inherit;

        svg {
            cursor: pointer;
            color: inherit;
            transform: rotate(270deg);
            width: 1.45em;
            height: 1.45em;
            transition: color 0.5s;
            path {
                fill: ${({ theme }) => theme.isDarkMode && theme.color.yellow};
                fill-opacity: ${({ theme }) => theme.isDarkMode && 0};
                transition: fill-opacity 0.6s, color 0.9s;
            }
            &:hover {
                color: ${({ theme }) => (theme.isDarkMode ? theme.color.white : theme.color.purple)};
                path {
                    fill-opacity: 1;
                    transition: fill-opacity 0.6s;
                }
                transition: color 0.5s;
            }
        }

        .dark {
            &::after {
                background-color: ${({ theme }) => theme.color.purple};
                transform: translateX(23px);
            }
            @media screen and (max-width: 500px) {
                &::after {
                    transform: translateX(23px);
                }
            }
        }
    }
`;

export const HeadTitle = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.4em;
    padding-left: 12.5px;

    &:hover {
        opacity: 65%;
        /* color: ${({ theme }) => theme.color.hoverColor}; */
        transition: opacity 0.35s;
    }
    transition: opacity 0.35s;
`;
