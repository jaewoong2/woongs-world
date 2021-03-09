import styled from 'styled-components';

export const HeaderNav = styled.nav`
    width: 100%;
    display: flex;
    height: 2.8em;
    border-bottom: 1px solid black;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;

    .active {
        color: ${({ theme }) => theme.color.purple};
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
