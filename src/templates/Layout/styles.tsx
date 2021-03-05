import styled from 'styled-components';

export const MainContainer = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    .main-container {
        width: 67%;
        border: 1px solid red;
        @media screen and (max-width: 960px) {
            width: 100%;
        }
    }

    .section-container {
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: space-evenly;
        @media screen and (max-width: 960px) {
            width: 100%;
            flex-direction: column;
        }
    }
`;

export const MainSection = styled.section`
    width: 100%;
    border: 2px solid blue;
`;

export const SideSection = styled.section`
    width: 16%;
    border: 2px solid green;
    left: 0;
    top: 0;
    position: absolute;
    @media screen and (max-width: 960px) {
        position: relative;
        width: 100%;
        margin: 0;
        margin-bottom: 5px;
    }
`;
