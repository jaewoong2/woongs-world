import styled from 'styled-components';

export const HeaderNav = styled.nav`
    width: 100%;
    display: flex;
    height: 2.8em;
    border-bottom: 2.3px solid ${({ theme }) => theme.color.border};
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    .link-wrapper {
        display: flex;
    }
    .active {
        color: ${({ theme }) => theme.color.purple};
    }

    .button-wrapper {
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

export const ToggleButton = styled.button`
    width: 60px;
    cursor: pointer;
    height: 33px;
    border-radius: 50px;
    margin-left: 10px;
    outline: none;
    position: relative;
    display: flex;
    align-items: center;
    padding: 0;
    background-color: ${({ theme }) => theme.color.dark};
    transition: background-color linear 0.5s, width 0.5s, height 0.5s;
    box-shadow: ${({ theme }) => theme.color.boxShadow};

    &::after {
        width: 35px;
        height: 35px;
        content: '';
        transform: translateX(-3px);
        background-color: ${({ theme }) => theme.color.primary};
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.55);
        border-radius: 50%;
        transition: transform linear 0.25s, background-color linear 0.5s, width 0.5s, height 0.5s;
    }

    @media screen and (max-width: 700px) {
        width: 50px;
        height: 20px;

        &::after {
            width: 26px;
            height: 26px;
        }
    }
`;

export const HeadTitle = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.4em;
    padding-left: 12.5px;

    &:hover {
        color: ${({ theme }) => theme.color.hoverColor};
        transition: color 0.35s;
    }
`;
